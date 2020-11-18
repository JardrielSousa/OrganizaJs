import { AuthGuardService } from './guards/auth-guard.service';
import {MatIconModule} from '@angular/material/icon';
import { ServiceCrudComponent } from './../app/views/service-crud/service-crud.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecalhoComponent } from './components/template/cabecalho/cabecalho.component';
import {MatToolbarModule, MatCardModule, MatButtonModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule , MatDatepickerToggle,MatDatepickerModule , MatNativeDateModule } from '@angular/material';
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
import { SchedulingCrudComponent } from './views/scheduling-crud/scheduling-crud.component';
import { SchedulingReadComponent } from './components/scheduling/scheduling-read/scheduling-read.component';
import { SchedulingUpdateComponent } from './components/scheduling/scheduling-update/scheduling-update.component';
import { SchedulingCreateComponent } from './components/scheduling/scheduling-create/scheduling-create.component';
import { SchedulingDeleteComponent } from './components/scheduling/scheduling-delete/scheduling-delete.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { SalescreateComponent } from './components/sales/salescreate/salescreate.component';
import { SalesreadComponent } from './components/sales/salesread/salesread.component';
import { SalesupdateComponent } from './components/sales/salesupdate/salesupdate.component';
import { SalesdeleteComponent } from './components/sales/salesdelete/salesdelete.component';
import { SalesCrudComponent } from './views/sales-crud/sales-crud.component';


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
    SchedulingCrudComponent,
    SchedulingReadComponent,
    SchedulingUpdateComponent,
    SchedulingCreateComponent,
    SchedulingDeleteComponent,
    AuthComponent,
    RegisterUserComponent,
    SalescreateComponent,
    SalesreadComponent,
    SalesupdateComponent,
    SalesdeleteComponent,
    SalesCrudComponent,
    
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
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  exports: [
    MatDatepickerModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-BR'} , AuthComponent,AuthGuardService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
