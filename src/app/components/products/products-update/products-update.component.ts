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
    if(this.product.price>0 && this.product.quantidade>0)
      this.productsService.update(this.product).subscribe(()=>{
      this.productsService.verMsg('Produto foi alterado com sucesso!!')
      this.router.navigate(['/products']);
    });
    else if(this.product.price>0)
      this.productsService.verMsg('seu produto precisa de um preço!!!',true);
    else if(this.product.quantidade>0)
      this.productsService.verMsg('precisa ter pelo menos um produto no estoque!!!',true);
  }
  cancel(){
    this.router.navigate(['/products'])
  }
}
