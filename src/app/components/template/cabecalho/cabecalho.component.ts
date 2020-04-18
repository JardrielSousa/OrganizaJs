import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit() {
  }

  get title(){
    return this.headerService.headerData.title
  }
  get icon(){
    return this.headerService.headerData.icon
  }
  get routerUrl(){
    return this.headerService.headerData.routerUrl
  }
}
