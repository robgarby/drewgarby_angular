import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
    {path:'PAGE',component:PageComponent},
    {path:'ADMIN',component:AdminComponent},
    {path:'**',component:PageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
