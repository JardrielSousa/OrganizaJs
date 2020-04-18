import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/cabecalho/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router : Router,private headerService : HeaderService ) {
    headerService.headerData = {
      title:'Cadastro de Produtos',
      icon : 'store' , 
      routerUrl:'/products'
    }
   }

  ngOnInit() {
  }
  
  produtoCriado():void{
    this.router.navigate(['/products/create'])
  }
}
