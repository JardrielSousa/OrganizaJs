import { AuthServiceService } from './../../../auth/auth-service.service';
import { AuthComponent } from './../../../auth/auth.component';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  temUsuarioo:boolean;
  mostrarMenu:boolean = false;
  default = "cab mat-elevation-z4"
  constructor(
    private headerService:HeaderService,
    private authServiceService:AuthServiceService,
    private router:Router) { }

  ngOnInit() {
   this.authServiceService.mostrarMenuEmitter.subscribe(
      mostrar =>{
        console.log('menu'+mostrar)
        this.mostrarMenu = mostrar
      }
    );
    this.verificaUsuario();
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
  sair(){
    window.localStorage.removeItem("user");
    this.router.navigate(['login/'])
  }

  verificaUsuario(){
    if(window.localStorage.getItem("user").length>0){
      console.log('tem usuario verificado na casa')
      this.temUsuarioo= true;
    }else{
      this.temUsuarioo= false;
      console.log('não tem usuario tem usuario')
    }
  }
  inicio(){
    if(this.temUsuarioo){
      this.router.navigate(['/'])
    }else{
      this.sair();
    }
  }
}
