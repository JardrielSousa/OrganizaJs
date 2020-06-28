
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
      private router : Router
      ) {                 
                 }
  ngOnInit(): void {
  }
  logar(){
    console.log('email:'+this.user.email+' pass:'+this.user.pass)
   this.authService.logar(this.user)
  }

}
