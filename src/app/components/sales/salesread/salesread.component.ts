import { Component, OnInit } from '@angular/core';
import { Sale } from '../sales.model';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-salesread',
  templateUrl: './salesread.component.html',
  styleUrls: ['./salesread.component.css']
})
export class SalesreadComponent implements OnInit {

  sales:Sale[]
  constructor(private salesService:SalesService) { }

  ngOnInit() {
    this.salesService.read().subscribe(sale=>{
      this.sales = sale
      console.log(sale)
    })
  }
  displayedColumns: string[] = ['id', 'nomeProduto', 'valor','tamanho','quantidade','dataVenda','pagamento','nomeCliente','endereco','contato','action'];
  
}
