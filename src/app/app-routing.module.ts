import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { L3escComponent } from './l3/l3esc/l3esc.component';
import { NsComponent } from "./misc/ns/ns.component";


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'ns', component: NsComponent},
  {path: 'l3esc', component: L3escComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
