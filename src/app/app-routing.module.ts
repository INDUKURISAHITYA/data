import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CarrersComponent } from './carrers/carrers.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CovidComponent } from './covid/covid.component';
import { ServiceGetComponent } from './service-get/service-get.component';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';
import { OverviewComponent } from './overview/overview.component';
import { ReactformComponent } from './reactform/reactform.component';
import { DynamicformsComponent } from './dynamicforms/dynamicforms.component';

export const RoutingComponent =[ReactformComponent,CarrersComponent,FormComponent,AboutComponent,DynamicformsComponent,BlogComponent,PageNotFoundComponent,ServiceGetComponent,CovidComponent,ContactComponent,OverviewComponent]
const routes: Routes = 
[
  {path:'',redirectTo:'/About',pathMatch:"full"},
  {path:'About',component:AboutComponent},
  {path:'Blog-li/:xx',component:CarrersComponent,children:[{path:'over',component:OverviewComponent},{path:'contact',component:ContactComponent }]},
  {path:'Blog-li',component:BlogComponent},
  {path:'Covid',component:CovidComponent},
  {path:'react',component:ReactformComponent},
  {path:'Employee',component:ServiceGetComponent},
  {path:'form',component:FormComponent},
  {path:'dyamicform',component:DynamicformsComponent},
  {path:'**',component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
