import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { MaterialModule } from "./shared/material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";
import { alertComponent } from "./shared/alert/alert-component";
import { DemoPipe } from "./shared/pipe/demo.pipe";
import { cardHowerDIrective } from "./shared/directive/cardHower.directive";
import { highLightDirective } from "./shared/directive/highlightattri.directive";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoPipe,
    cardHowerDIrective,
    highLightDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports:[DemoPipe],
  bootstrap: [AppComponent],
  entryComponents: [alertComponent]

})
export class AppModule { }
