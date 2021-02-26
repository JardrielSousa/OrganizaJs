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
      products.forEach(element => {
        console.log("e:"+element)
      });
      console.log(products)
    })
  }
  getTotalCost() {
    return 10
  }
  displayedColumns: string[] = ['id', 'name', 'price','priceSale','quantity','date','action'];
  

}

