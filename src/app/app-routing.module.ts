import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NsComponent } from './misc/ns/ns.component';
import { L3escComponent } from './l3/l3esc/l3esc.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'NS', component: NsComponent},
  {path: 'L3ESC', component: L3escComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
