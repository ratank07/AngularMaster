import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { FormsModule, NgForm } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { TestmoduleModule } from "./testmodule/testmodule.module";
import { FlexComponent } from './flex/flex.component';
import { FlexnavComponent } from './flex/flexnav/flexnav.component';
import { ObservableComponent } from './observable/observable.component';
import { GridboxComponent } from './flex/gridbox/gridbox.component';
import { DemoPipe } from "../shared/pipe/demo.pipe";
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [DashboardComponent,
    PostCreateComponent, PostListComponent, FlexComponent, FlexnavComponent, ObservableComponent, GridboxComponent, AdminComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    SharedModule,
    TestmoduleModule
  ]
})
export class ComponentModule { }
