import { Injectable } from '@angular/core';
import { MsalService } from "@azure/msal-angular";
import { Client } from "@microsoft/microsoft-graph-client";

import { OAuthSettings } from "../../../environments/environment";
import { User } from "../models/user";
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public authenticated: boolean;
  public user: User;

  constructor(
    private msalService: MsalService
  ) {
    this.authenticated = this.msalService.getAccount() !=null;
    this.getUser().then((user) => {this.user = user});
   }

   async signIn(): Promise<void> {
     let result = await this.msalService.loginPopup(OAuthSettings)
     .catch((reason) => {
       console.log('Login Failed', JSON.stringify(reason, null, 2));
     });

     if (result) {
       this.authenticated = true;
       this.user = await this.getUser();
     }
   }
   signOut(): void {
    this.msalService.logout();
    this.user = null;
    this.authenticated = false;
   };
   async getAccessToken(): Promise<string> {
     let result = await this.msalService.acquireTokenSilent(OAuthSettings)
     .catch((reason) => {
       console.log('get Token Failed', JSON.stringify(reason, null, 2));
     });

     if (result) {
       return result.accessToken;
     }
     return null;
   }
   private async getUser(): Promise<User> {
     if (!this.authenticated) return null;

     let graphClient = Client.init({
       authProvider: async(done) => {
         let token = await this.getAccessToken().catch((reason) => {
           console.log(reason, null);
         });
         
         if (token)
         {
           done(null, token);
         } else {
           done("Could not get an access token", null);
         }
       }
     });

     let graphUser = await graphClient.api('/me').get();

     let user = new User();
     user.displayName = graphUser.displayName;
     user.email = graphUser.mail || graphUser.userPrincipalName;
     return user;
   }
  }  