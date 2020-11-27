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
    nome : '',
    valor : 0.0,
    valorVenda:0.0,
    quantidade:1,
    dataCompra:new Date
  }
  minDate = new Date(2000, 0, 1);


  constructor(private productsService:ProductsService,
    private router : Router) { }

  ngOnInit() {
    
  }

  createProduct():void{
    debugger;
    if(this.product.quantidade>0 && this.product.valor>0)
      this.productsService.create(this.product).subscribe(()=>{
        this.productsService.verMsg('produto criado!!!');
        this.router.navigate(['/products']);
      });
    else if(this.product.valor>0)
      this.productsService.verMsg('seu produto precisa de um preço!!!',true);
    else if(this.product.quantidade>0)
      this.productsService.verMsg('precisa ter pelo menos um produto no estoque!!!',true);
    
  }
  cancel():void{
    this.router.navigate(['/products'])
  }
}
