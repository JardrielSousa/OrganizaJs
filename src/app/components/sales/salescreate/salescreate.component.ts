import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../products/product.model';
import { ProductsService } from '../../products/products.service';
import { Sale } from '../sales.model';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-salescreate',
  templateUrl: './salescreate.component.html',
  styleUrls: ['./salescreate.component.css']
})
export class SalescreateComponent implements OnInit {

  sale : Sale = {
    nomeProduto:'',
    valor:0,
    tamanho:'',
    quantidade:0,
    dataVenda:new Date(),
    pagamento:''
  }

  constructor(private salesService:SalesService,
    private router : Router) { }

  ngOnInit() {
    
  }

  createProduct():void{
    if(this.sale.quantidade>0 && this.sale.valor>0)
      this.salesService.create(this.sale).subscribe(()=>{
        this.salesService.verMsg('venda criada!!!');
        this.router.navigate(['/sales']);
      });
    else if(this.sale.valor>0)
      this.salesService.verMsg('sua venda precisa de um preço!!!',true);
    else if(this.sale.quantidade>0)
      this.salesService.verMsg('precisa ter pelo menos uma venda no estoque!!!',true);
    
  }
  cancel():void{
    this.router.navigate(['/sales'])
  }

}
