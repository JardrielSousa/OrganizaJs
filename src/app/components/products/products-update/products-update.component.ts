import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {

product : Product = {
  name : '',
  price : null,
  quantidade:null
}
  constructor(
    private productsService:ProductsService,
    private router:Router ,
    private route:ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.productsService.readById(id).subscribe(product => {
      this.product = product
    })
  }
  updateProduct(){
    this.productsService.update(this.product).subscribe(()=>{
      this.productsService.verMsg('Produto foi alterado com sucesso!!')
      this.router.navigate(['/products'])
    })
  }
  cancel(){
    this.router.navigate(['/products'])
  }
}
