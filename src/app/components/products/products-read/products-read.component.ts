import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {

  products:Product[]
  constructor(private productService:ProductsService) { }

  ngOnInit() {
    this.productService.read().subscribe(products=>{
      this.products = products
      console.log(products)
    })
  }
  displayedColumns: string[] = ['id', 'name', 'price','quantity','action'];
  dataSource = this.products;

}

