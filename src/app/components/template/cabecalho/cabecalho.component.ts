import { AuthServiceService } from './../../../auth/auth-service.service';
import { AuthComponent } from './../../../auth/auth.component';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  mostrarMenu:boolean = false;
  default = "cab mat-elevation-z4"
  constructor(
    private headerService:HeaderService,
    private authServiceService:AuthServiceService) { }

  ngOnInit() {
   this.authServiceService.mostrarMenuEmitter.subscribe(
      mostrar =>{
        console.log('menu'+mostrar)
        this.mostrarMenu = mostrar
      }
    )
  }
  exibirMenu(){
   if(this.mostrarMenu){
    this.mostrarMenu = false;
   }else{
    this.mostrarMenu = true;
   }
  }
  get title(){
    return this.headerService.headerData.title
  }
  get icon(){
    return this.headerService.headerData.icon
  }
  get routerUrl(){
    return this.headerService.headerData.routerUrl
  }
}
