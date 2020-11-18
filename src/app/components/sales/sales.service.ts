import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Sale } from './sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private snackBar:MatSnackBar,  private http:HttpClient) { }

  baseUrl = `${environment.url}vendas`
  

  verMsg(msg:string,isError:boolean=false):void{
    console.log(msg)
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msgError'] : ['msgSucess']
    })
  }

  create(sale:Sale):Observable<Sale>{
    return this.http.post<Sale>(this.baseUrl,sale).pipe(
      map((obj)=>obj),
      catchError((e)=>this.errorhandler(e))
    )
  }
  errorhandler(e:any):Observable<any>{
      console.log(e)
      this.verMsg('Ocorreu um erro!!',true)
      return EMPTY
  }
  read():Observable<Sale[]>{
    return this.http.get<Sale[]>(this.baseUrl)
  }

  readById(id:string):Observable<Sale>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Sale>(url)
  }

  update(sale:Sale):Observable<Sale>{
    const url = `${this.baseUrl}/${sale.id}`
    return this.http.put<Sale>(url,sale).pipe(
      map((obj)=>obj),
      catchError((e)=>this.errorhandler(e)));
  }

  delete(id:number):Observable<Sale>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Sale>(url).pipe(
      map((obj)=>obj),
      catchError((e)=>this.errorhandler(e)))
  }
}
