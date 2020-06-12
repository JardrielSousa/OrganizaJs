import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private snackBar:MatSnackBar,  private http:HttpClient) { }

  baseUrl = "https://organizadbapi.herokuapp.com/v1/produto"
  

  verMsg(msg:string,isError:boolean=false):void{
    console.log(msg)
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msgError'] : ['msgSucess']
    })
  }

  create(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product).pipe(
      map((obj)=>obj),
      catchError((e)=>this.errorhandler(e))
    )
  }
  errorhandler(e:any):Observable<any>{
      console.log(e)
      this.verMsg('Ocorreu um erro!!',true)
      return EMPTY
  }
  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id:string):Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url,product).pipe(
      map((obj)=>obj),
      catchError((e)=>this.errorhandler(e)));
  }

  delete(id:number):Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj)=>obj),
      catchError((e)=>this.errorhandler(e)))
  }
}
