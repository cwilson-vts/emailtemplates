import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OAuthSettings } from "src/environments/environment";

import { AppComponent } from './app.component';
import { MsalModule } from "@azure/msal-angular";
import { HomeComponent } from './home/home.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MsalModule.forRoot({
      auth: {
        clientId: OAuthSettings.appId
      }
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
