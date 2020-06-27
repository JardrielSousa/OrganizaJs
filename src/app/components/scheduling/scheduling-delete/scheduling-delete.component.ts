import { Router, ActivatedRoute } from '@angular/router';
import { SchedulingService } from './../scheduling.service';
import { scheduling } from './../scheduling.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling-delete',
  templateUrl: './scheduling-delete.component.html',
  styleUrls: ['./scheduling-delete.component.css']
})
export class SchedulingDeleteComponent implements OnInit {
  scheduling : scheduling = {
    date :'',
    time : ''
  }
  constructor(
    private schedulingService:SchedulingService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.schedulingService.readById(id).subscribe(scheduling=>{
      this.scheduling = scheduling
    })
  }
  deleteScheduling(){
    this.schedulingService.delete(this.scheduling.id).subscribe(()=>{
      this.schedulingService.verMsg('Agendamento foi Excluido!!')
      this.router.navigate(['/scheduling'])
    })
  }
  cancel(){
    this.router.navigate(['/scheduling'])
  }

}
