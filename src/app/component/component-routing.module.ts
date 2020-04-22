import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { TestmoduleModule } from "./testmodule/testmodule.module";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {
    path: "postcreate",
    component: PostCreateComponent,
    children: [{ path: "posts", component: PostListComponent }],
  },
  { path: "testmodule", loadChildren: () => TestmoduleModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ComponentRoutingModule {}
