import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '../sales.model';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-salesdelete',
  templateUrl: './salesdelete.component.html',
  styleUrls: ['./salesdelete.component.css']
})
export class SalesdeleteComponent implements OnInit {

  sale : Sale = {
    nomeProduto:'',
    valor:0,
    tamanho:'',
    quantidade:0,
    dataVenda:new Date(),
    pagamento:'',
    nomeCliente:'',
    endereço:'',
    contato:0
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
    deleteSale(){
      console.log(this.sale)
        this.salesService.delete(this.sale.id).subscribe(()=>{
        this.salesService.verMsg('Venda foi deletado com sucesso!!')
        this.router.navigate(['/sales']);
      });  
    }
    cancel(){
      this.router.navigate(['/sales'])
    }

}
