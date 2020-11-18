import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/cabecalho/header.service';

@Component({
  selector: 'app-sales-crud',
  templateUrl: './sales-crud.component.html',
  styleUrls: ['./sales-crud.component.css']
})
export class SalesCrudComponent implements OnInit {

  constructor(private router:Router,private headerService : HeaderService) {
    headerService.headerData = {
      title:'Vendas',
      icon : 'build' , 
      routerUrl:'/sales'
    }
   }


  ngOnInit() {
  }

  createSale(){
    this.router.navigate(['sales/create'])
  }
}
