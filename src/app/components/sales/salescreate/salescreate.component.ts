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
    pagamento:'',
    nomeCliente:'',
    endereco:'',
    contato:0
  }
  minDate = new Date(2000, 0, 1);


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
  }
  cancel():void{
    this.router.navigate(['/sales'])
  }

}
