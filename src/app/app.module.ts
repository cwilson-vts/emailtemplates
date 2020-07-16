import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NsComponent } from './misc/ns/ns.component';
import { L3escComponent } from './l3/l3esc/l3esc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NsComponent,
    L3escComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
