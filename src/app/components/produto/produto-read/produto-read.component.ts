import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

produtos: Produto[] = [];
displayedColumns: string[] = ["id", "categoria", "nome", "preco","dataValidade","ativo", "actions"];
dataSource: any = [];

constructor(
  private produtoService: ProdutoService,
  private router: Router
){}

  ngOnInit(): void {
   this.readProdutos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readProdutos(): void{
      this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos;
      this.dataSource = new MatTableDataSource<Produto>(this.produtos);
    })
  }

  deleteProdutoById(id: any): void {
    if(window.confirm('Confirma a exclusão do Produto?')){
      this.produtoService.deleteById(id).subscribe(()=>{
        this.produtoService.showMessage("Produto excluído com sucesso!!!");
        this.readProdutos();
        this.router.navigate(['/produto']);
      });
    }

  }

}
