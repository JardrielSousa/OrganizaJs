import { SchedulingService } from './../scheduling.service';
import { scheduling } from './../scheduling.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling-read',
  templateUrl: './scheduling-read.component.html',
  styleUrls: ['./scheduling-read.component.css']
})
export class SchedulingReadComponent implements OnInit {

  constructor(private schedulingService:SchedulingService) { }
  scheduling:scheduling[]
  ngOnInit() {
    this.schedulingService.read().subscribe(scheduling=>{
      this.scheduling = scheduling
      console.log(scheduling)
    })
  }

  displayedColumns: string[] = ['id', 'time' ,'date','service','action'];
  dataSource = this.scheduling;

}
