import { headerData } from './headerData';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headeData = new BehaviorSubject<headerData>({
    title:'Inicio',
    icon:'home',
    routerUrl:''
  })

  constructor() { }

  get headerData():headerData{
    return this.headeData.value
  }
  set headerData(headerData:headerData){
    this.headeData.next(headerData)
  }
}
