import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {
  product : Product = {
    nome : '',
    valor: 0.0,
    quantidade:0
  }
  constructor(
    private productsService:ProductsService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.productsService.readById(id).subscribe(product=>{
      this.product = product
    })
  }
  deleteProduct(){
    this.productsService.delete(this.product.id).subscribe(()=>{
      this.productsService.verMsg('Produto foi Excluido!!')
      this.router.navigate(['/products'])
    })
  }
  cancel(){
    this.router.navigate(['/products'])
  }
}
