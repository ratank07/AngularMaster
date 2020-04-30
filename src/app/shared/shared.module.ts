import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from "./material/material.module";
import { alertComponent } from "./alert/alert-component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
  declarations: [FooterComponent, PageNotFoundComponent, alertComponent,PlaceholderDirective],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
  ],
  exports:[FooterComponent, MaterialModule, alertComponent]
})
export class SharedModule { }
