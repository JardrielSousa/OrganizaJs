import { Product } from './../../products/product.model';

import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {

  service : Service = {
    name:'',
    price:null,
    time:'',
    date:'',
    }

  constructor(
    private router:Router,
    private serviceService:ServiceService) { }

  ngOnInit() {
  }

  createService(){
    this.serviceService.create(this.service).subscribe(service=>{
      this.service = service
      this.serviceService.verMsg('Serviço criado!!!')
      this.router.navigate(['/service'])
    })
  }
  cancel(){
    this.router.navigate(['/service'])
  }
}
