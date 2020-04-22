import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmoduleRoutingModule } from './testmodule-routing.module';
import { TestmodComponent } from './testmod/testmod.component';
import { Testmod2Component } from './testmod2/testmod2.component';


@NgModule({
  declarations: [TestmodComponent, Testmod2Component],
  imports: [
    CommonModule,
    TestmoduleRoutingModule
  ],
  exports: [TestmodComponent]

})
export class TestmoduleModule { }
