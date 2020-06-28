import { Router } from '@angular/router';
import { User } from './user.modal';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authAutenticado : boolean = false;
  public mostrarMenuEmitter = new EventEmitter<boolean>();
  
  constructor(
    private http: HttpClient,
    private authService:AuthServiceService,
    private router:Router) {
  }
  logar(user){
    if(user.email==='root@123' && user.pass==='qwe123'){
      this.authAutenticado = true;
      this.mostrarMenuEmitter.emit(true)
      this.router.navigate(['/home'])
    }else{
      this.authAutenticado = false;
      this.mostrarMenuEmitter.emit(false)
      this.router.navigate(['/'])
    }
  }
}
