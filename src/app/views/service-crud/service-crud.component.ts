import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/cabecalho/header.service';

@Component({
  selector: 'app-service-crud',
  templateUrl: './service-crud.component.html',
  styleUrls: ['./service-crud.component.css']
})
export class ServiceCrudComponent implements OnInit {

  constructor(private router:Router,private headerService : HeaderService) {
    headerService.headerData = {
      title:'Cadastro de Serviços',
      icon : 'build' , 
      routerUrl:'/service'
    }
   }

  ngOnInit() {
  }

  criarServico(){
    this.router.navigate(['/service/create'])
  }
}
