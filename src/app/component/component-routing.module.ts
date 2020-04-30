import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { TestmoduleModule } from "./testmodule/testmodule.module";
import { FlexComponent } from "./flex/flex.component";
import { ObservableComponent } from "./observable/observable.component";
import { FlexnavComponent } from "./flex/flexnav/flexnav.component";
import { GridboxComponent } from "./flex/gridbox/gridbox.component";
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from "../shared/login/auth-guards.service";
import { LoginComponent } from "../shared/login/login/login.component";
import { RoleGaurd } from '../shared/login/role-gaurd.service';
import { LoginModule } from "../shared/login/login.module";
const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate:[AuthGuard] },
  { path: "dashboard/:dashparam", component: DashboardComponent },
  {
    path: "postcreate",
    component: PostCreateComponent,
    children: [{ path: "posts", component: PostListComponent }],
  },
  {
    path: "flex",
    component: FlexComponent, canActivate:[AuthGuard],
    children: [
      { path: "flex", component: FlexnavComponent, canActivate:[RoleGaurd] },
      { path: "grid", component: GridboxComponent },
    ],
  },
  { path:'admin', component: AdminComponent, data:{role:'admin'},
     canActivate:[RoleGaurd]
  },
  { path: 'login', loadChildren: ()=>LoginModule},
  {
    path: "testmodule",
    //  loadChildren:"./testmodule/testmodule.module#TestmoduleModule",
    loadChildren: () => TestmoduleModule,
  },
  { path: "observable", component: ObservableComponent },
  { path: "observable/:id", component: PostCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ComponentRoutingModule {}
