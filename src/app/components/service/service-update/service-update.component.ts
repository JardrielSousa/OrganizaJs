import { Product } from './../../products/product.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit {

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

  updateService(){
    this.serviceService.update(this.service).subscribe(()=>{
      this.serviceService.verMsg('Produto foi alterado com sucesso!!')
      this.router.navigate(['/service'])
    })
  }
  cancel(){
    this.router.navigate(['/service'])
  }
}
