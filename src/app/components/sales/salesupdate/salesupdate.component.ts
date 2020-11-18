import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '../sales.model';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-salesupdate',
  templateUrl: './salesupdate.component.html',
  styleUrls: ['./salesupdate.component.css']
})
export class SalesupdateComponent implements OnInit {

  sale : Sale = {
    nomeProduto:'',
    valor:0.0,
    tamanho:'',
    quantidade:0,
    pagamento:'',
    dataVenda:new Date()
  }
    constructor(
      private salesService:SalesService,
      private router:Router ,
      private route:ActivatedRoute) { }
  
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id')
      this.salesService.readById(id).subscribe(sale => {
        this.sale = sale
      })
    }
    updateSale(){
      console.log(this.sale)
      if(this.sale.valor>0 && this.sale.quantidade>0)
        this.salesService.update(this.sale).subscribe(()=>{
        this.salesService.verMsg('Venda foi alterado com sucesso!!')
        this.router.navigate(['/sales']);
      });
      else if(this.sale.valor>0)
        this.salesService.verMsg('sua venda precisa de um preço!!!',true);
      else if(this.sale.quantidade>0)
        this.salesService.verMsg('precisa ter pelo menos uma venda no estoque!!!',true);
  
    }
    cancel(){
      this.router.navigate(['/sales'])
    }

}
