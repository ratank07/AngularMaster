import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { FormsModule, NgForm } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { TestmoduleModule } from "./testmodule/testmodule.module";

@NgModule({
  declarations: [DashboardComponent,
    PostCreateComponent, PostListComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    SharedModule,
    TestmoduleModule
  ]
})
export class ComponentModule { }
