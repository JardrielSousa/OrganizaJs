import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-read',
  templateUrl: './service-read.component.html',
  styleUrls: ['./service-read.component.css']
})
export class ServiceReadComponent implements OnInit {
services:Service[];

  constructor(private serviceService:ServiceService) { }

  ngOnInit() {
    this.serviceService.read().subscribe(service=>{
      this.services = service
      console.log(this.services)
  })

}
displayedColumns: string[] = ['id', 'name', 'price','product','date','time','action'];
dataSource = this.services;
}