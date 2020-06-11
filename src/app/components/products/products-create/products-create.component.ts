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
    quantidade:1
  }

  constructor(private productsService:ProductsService,
    private router : Router) { }

  ngOnInit() {
    
  }

  createProduct():void{
    if(this.product.quantidade>0 && this.product.price>0)
      this.productsService.create(this.product).subscribe(()=>{
        this.productsService.verMsg('produto criado!!!');
        this.router.navigate(['/products']);
      });
    else if(this.product.price>0)
      this.productsService.verMsg('seu produto precisa de um preço!!!',true);
    else if(this.product.quantidade>0)
      this.productsService.verMsg('precisa ter pelo menos um produto no estoque!!!',true);
    
  }
  cancel():void{
    this.router.navigate(['/products'])
  }
}
