import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Produto } from 'src/app/models/produto.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit{
  produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    quantidadeEstoque: 0,
    ativo: false,
    dataValidade: new Date(),
    categoria: {
      id: 0,
      nome: ''
    },
  }

  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getCategorias();

    let id = this.route.snapshot.paramMap.get("id");
    if (id === null) {
      id = "0";
    } else {
      this.produtoService.readById(Number(id)).subscribe(produto => {
        this.produto = produto;
      });
    }

  }



  cancel() : void {
    this.router.navigate(["/produto"]);
  }

  getCategorias(): void {
    this.categoriaService.read().subscribe(categorias => {
    this.categorias = categorias;
    });
  }

  createProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage(`Produto ${this.produto.nome} foi inserida com sucesso!`);
      this.router.navigate(["/produto"]);
    });

  }

  updateProduto(): void {
    this.produtoService.update(this.produto).subscribe(() => {
      this.produtoService.showMessage(`Produto ${this.produto.nome} alterada com sucesso!`);
      this.router.navigate(["/produto"]);
    });
  }

  saveProduto(): void{
    if(this.produto.id){
      this.updateProduto();

    }else{
      this.createProduto();
    }
  }

}
