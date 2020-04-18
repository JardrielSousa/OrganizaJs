import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Service } from './service.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private snackBar:MatSnackBar,  private http:HttpClient) { }

  baseUrl = "http://localhost:3101/service"

  verMsg(msg:string):void{
    console.log(msg)
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  create(product:Service):Observable<Service>{
    return this.http.post<Service>(this.baseUrl,product)
  }
  read():Observable<Service[]>{
    return this.http.get<Service[]>(this.baseUrl)
  }

  readById(id:string):Observable<Service>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Service>(url)
  }

  update(product:Service):Observable<Service>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Service>(url,product)
  }

  delete(id:number):Observable<Service>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Service>(url)
  }
}
