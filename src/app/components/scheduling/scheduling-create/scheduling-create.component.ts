import { SchedulingService } from './../scheduling.service';
import { Service } from './../../service/service.model';
import { scheduling } from './../scheduling.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-scheduling-create',
  templateUrl: './scheduling-create.component.html',
  styleUrls: ['./scheduling-create.component.css']
})
export class SchedulingCreateComponent implements OnInit {

  scheduling : scheduling = {
    date : '',
    time : '',
    //service: new Service()
  }

  constructor(private schedulingService:SchedulingService,
    private router : Router) { }

  ngOnInit() {
    
  }

  createScheduling():void{
      this.schedulingService.create(this.scheduling).subscribe(()=>{
        this.schedulingService.verMsg('agendamento criado!!!');
        this.router.navigate(['/scheduling']);
      });
  }
  cancel():void{
    this.router.navigate(['/scheduling'])
  }


}
