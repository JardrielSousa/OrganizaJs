import { ServiceUpdateComponent } from './components/service/service-update/service-update.component';
import { ServiceDeleteComponent } from './components/service/service-delete/service-delete.component';
import { ServiceReadComponent } from './components/service/service-read/service-read.component';
import { ProductsUpdateComponent } from './components/products/products-update/products-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component'
import {ProductCrudComponent} from './views/product-crud/product-crud.component'
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';
import { ServiceCreateComponent } from './components/service/service-create/service-create.component';
import { ServiceCrudComponent } from './views/service-crud/service-crud.component';
const routes: Routes = [
  {
  path: "",
  component:HomeComponent
  },{
    path:"products",
    component:ProductCrudComponent
  },{
    path:"products/create",
    component:ProductsCreateComponent
  },{
    path:"products/update/:id",
    component:ProductsUpdateComponent
  },{
    path:"products/delete/:id",
    component:ProductsDeleteComponent
  },{
    path:"service",
    component:ServiceCrudComponent
  }
  ,{
    path:"service/create",
    component:ServiceCreateComponent
  },{
    path:"service/update/:id",
    component:ServiceUpdateComponent
  },{
    path:"service/delete/:id",
    component:ServiceDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
