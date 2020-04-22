import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestmodComponent } from "./testmod/testmod.component";
import { Testmod2Component } from "./testmod2/testmod2.component";


const routes: Routes = [
  { path:'', component:TestmodComponent},
  { path:'test2', component:Testmod2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestmoduleRoutingModule { }
