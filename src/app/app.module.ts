import { ServiceCrudComponent } from './../app/views/service-crud/service-crud.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecalhoComponent } from './components/template/cabecalho/cabecalho.component';
import {MatToolbarModule, MatCardModule, MatButtonModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatListModule} from '@angular/material/list'
import {MatSidenavModule} from '@angular/material/sidenav'
import { RodapeComponent } from './components/template/rodape/rodape.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { ProductsReadComponent } from './components/products/products-read/products-read.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ProductsUpdateComponent } from './components/products/products-update/products-update.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';
import { ServiceCreateComponent } from './components/service/service-create/service-create.component';
import { ServiceReadComponent } from './components/service/service-read/service-read.component';
import { ServiceUpdateComponent } from './components/service/service-update/service-update.component';
import { ServiceDeleteComponent } from './components/service/service-delete/service-delete.component';



registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductsCreateComponent,
    ProductsReadComponent,
    ProductsUpdateComponent,
    ProductsDeleteComponent,
    ServiceCreateComponent,
    ServiceReadComponent,
    ServiceUpdateComponent,
    ServiceCrudComponent,
    ServiceDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
