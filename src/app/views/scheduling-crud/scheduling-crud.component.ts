import { HeaderService } from './../../components/template/cabecalho/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling-crud',
  templateUrl: './scheduling-crud.component.html',
  styleUrls: ['./scheduling-crud.component.css']
})
export class SchedulingCrudComponent implements OnInit {

  constructor(private router:Router,private headerService : HeaderService) {
    headerService.headerData = {
      title:'Agendamentos',
      icon : 'build' , 
      routerUrl:'/scheduling'
    }
   }


  ngOnInit() {
  }

  criarAgendamento(){
    this.router.navigate(['scheduling/create'])
  }
}
