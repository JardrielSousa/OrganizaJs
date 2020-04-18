import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/cabecalho/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  items = ITENS;
  constructor(private headerService:HeaderService) {
    headerService.headerData = {
      title:'Inicio',
      icon : 'home' , 
      routerUrl:''
    }
   }

  ngOnInit() {
  }

}
const ITENS =['teste','aaaa','pppp']