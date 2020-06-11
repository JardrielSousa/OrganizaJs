import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-delete',
  templateUrl: './service-delete.component.html',
  styleUrls: ['./service-delete.component.css']
})
export class ServiceDeleteComponent implements OnInit {

  service : Service ={
    name:'',
    price: 0 ,
    date:'',
    time:'',
    quantidade:0
    
}

constructor(
  private router:Router,
  private route:ActivatedRoute,
  private serviceService:ServiceService) { }

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  this.serviceService.readById(id).subscribe(product => {
    this.service = product
  })
}

deleteService(){
  this.serviceService.delete(this.service.id).subscribe(()=>{
    this.serviceService.verMsg('Produto foi Excluido!!')
    this.router.navigate(['/service'])
  })
}
cancel(){
  this.router.navigate(['/service'])
}
}
