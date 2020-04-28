import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { TestmoduleModule } from "./testmodule/testmodule.module";
import { FlexComponent } from './flex/flex.component';
import { ObservableComponent } from './observable/observable.component';
import { FlexnavComponent } from './flex/flexnav/flexnav.component';
import { GridboxComponent } from './flex/gridbox/gridbox.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/:dashparam", component: DashboardComponent },
  {
    path: "postcreate", component: PostCreateComponent,
    children: [{ path: "posts", component: PostListComponent }]
  },
  { path:'flex', component: FlexComponent, children: [{path:'flex', component:FlexnavComponent},
    {path:'grid', component:GridboxComponent}]
  },
  { path: "testmodule",
  //  loadChildren:"./testmodule/testmodule.module#TestmoduleModule",
  loadChildren: ()=> TestmoduleModule
},
  { path: 'observable', component: ObservableComponent},
  { path: 'observable/:id', component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ComponentRoutingModule {}
