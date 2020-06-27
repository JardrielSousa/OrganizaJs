import { SchedulingService } from './../scheduling.service';
import { scheduling } from './../scheduling.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling-update',
  templateUrl: './scheduling-update.component.html',
  styleUrls: ['./scheduling-update.component.css']
})
export class SchedulingUpdateComponent implements OnInit {

  scheduling : scheduling = {
    date : '',
    time : '',
    //service: new Service()
  }

  constructor(private schedulingService:SchedulingService,
      private router:Router ,
      private route:ActivatedRoute) { }
  
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id')
      this.schedulingService.readById(id).subscribe(scheduling => {
        this.scheduling = scheduling
      })
    }
    updateScheduling(){
      console.log(this.scheduling)
        this.schedulingService.update(this.scheduling).subscribe(()=>{
        this.schedulingService.verMsg('Agendamento foi alterado com sucesso!!')
        this.router.navigate(['/scheduling']);
      });
    }
    cancel(){
      this.router.navigate(['/scheduling'])
    }
  

}
