import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from "./material/material.module";


@NgModule({
  declarations: [FooterComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports:[FooterComponent, MaterialModule]
})
export class SharedModule { }
