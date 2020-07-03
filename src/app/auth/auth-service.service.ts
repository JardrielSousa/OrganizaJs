import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { environment } from './../../environments/environment';
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
  baseUrl = `${environment.url}users`
  
  constructor(
    private http: HttpClient,
    private authService:AuthServiceService,
    private router:Router,
    private snackBar : MatSnackBar) {  }
  logar(user):Observable<User>{
    return this.http.get<User>(this.baseUrl);
  }
  cadastrar(user):Observable<User>{
    return this.http.post<User>(this.baseUrl,user);
  }
  isAuthAutenticado(){
    return this.authAutenticado;
  }
   
  verMsg(msg:string,isError:boolean=false):void{
    console.log(msg)
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msgError'] : ['msgSucess']
    })
  }
}
