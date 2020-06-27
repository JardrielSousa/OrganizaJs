import { catchError, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { scheduling } from './scheduling.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private snackBar:MatSnackBar,  private http:HttpClient) { }

  baseUrl = "http://localhost:3101/agendamento";
  

  verMsg(msg:string,isError:boolean=false):void{
    console.log(msg)
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msgError'] : ['msgSucess']
    })
  }

  create(scheduling:scheduling):Observable<scheduling>{
    return this.http.post<scheduling>(this.baseUrl,scheduling).pipe(
      map((obj)=>obj),
      catchError((e)=>this.errorhandler(e))
    )
  }
  errorhandler(e:any):Observable<any>{
      console.log(e)
      this.verMsg('Ocorreu um erro!!',true)
      return EMPTY
  }
  read():Observable<scheduling[]>{
    return this.http.get<scheduling[]>(this.baseUrl)
  }

  readById(id:string):Observable<scheduling>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<scheduling>(url)
  }

  update(scheduling:scheduling):Observable<scheduling>{
    const url = `${this.baseUrl}/${scheduling.id}`
    return this.http.put<scheduling>(url,scheduling).pipe(
      map((obj)=>obj),
      catchError((e)=>this.errorhandler(e)));
  }

  delete(id:number):Observable<scheduling>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<scheduling>(url).pipe(
      map((obj)=>obj),
      catchError((e)=>this.errorhandler(e)))
  }

}
