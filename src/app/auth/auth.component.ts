import { MatSnackBar } from '@angular/material';

import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from './user.modal';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit { 
  private authAutenticado : boolean = false;
  public mostrarMenuEmitter = new EventEmitter<boolean>();
  user:User={
    email:'',
    pass:'' 
  }
    constructor(
      private authService:AuthServiceService,
      private router : Router,
      private snackBar : MatSnackBar
      ) {                 
                 }
  ngOnInit(): void {
  }
  /*logar(){
    console.log('email:'+this.user.email+' pass:'+this.user.pass)
    this.authService.logar(this.user).subscribe(
      (user) => {
        this.authAutenticado = true;
        this.snackBar.open('Logged Sucessed! Welcome '+user.email,'OK',
        {duration:2000});
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['home']);
      },(err)=>{
        this.authAutenticado = false;
        this.snackBar.open('User or Password Incorrect!!');
        this.mostrarMenuEmitter.emit(false);
        this.router.navigate(['/']);
      }
    )
  }*/
  logar(){
    console.log('email:'+this.user.email+' pass:'+this.user.pass)
    if(this.user.email==="root@123" && this.user.pass ==="qwe123"){
      this.authAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      window.localStorage.setItem("user", JSON.stringify(this.user));
      this.router.navigate(['home']);
    
    }else{
      this.authAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.router.navigate(['/']);
    
    }
  }

  criarUsuario(){
    this.router.navigate(['/register']);
  }

}
