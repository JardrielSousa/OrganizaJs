import { User } from './../auth/user.modal';
import { AuthServiceService } from './../auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User={
    email:'',
    pass:'' 
  }

  constructor(
    private authServiceService : AuthServiceService,
    private route:Router,
    private snackBar : MatSnackBar

    ) { }

  ngOnInit() {
  }
  cadastrar(){
    this.authServiceService.cadastrar(this.user).subscribe(
      (user)=>{
        this.snackBar.open('Create user Sucessed! Welcome '+user.email,'OK',
        {duration:2000});
        this.route.navigate(['/login'])
      },(err)=>{
        this.snackBar.open('Error Created User','OK',
        {duration:2000});
      }
    )
  }
}
