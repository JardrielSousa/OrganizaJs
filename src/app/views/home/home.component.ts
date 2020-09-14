import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/cabecalho/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  temUsuarioo:boolean;
  items = ITENS;
  constructor(private headerService:HeaderService) {
    headerService.headerData = {
      title:'Inicio',
      icon : 'home' , 
      routerUrl:''
    }
   }

  ngOnInit() {
    this.verificaUsuario();
  }

  verificaUsuario(){
    if(window.localStorage.getItem("user").length>0){
      console.log('tem usuario')
      this.temUsuarioo= true;
    }else{
      this.temUsuarioo= false;
      console.log('não tem usuario tem usuario')
    }
  }
}
const ITENS =['teste','aaaa','pppp']