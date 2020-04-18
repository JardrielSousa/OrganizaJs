import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  product : Product = {
    name : '',
    price : null,
    quantidade:null
  }

  constructor(private productsService:ProductsService,
    private router : Router) { }

  ngOnInit() {
    
  }

  createProduct():void{
    this.productsService.create(this.product).subscribe(()=>{
      this.productsService.verMsg('produto criado!!!');
      this.router.navigate(['/products']);
    })
    
  }
  cancel():void{
    this.router.navigate(['/products'])
  }
}
