import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
  categoria: Categoria = {
    id: 0,
    nome: ""
  }
  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    if (id === null) {
      id = "0";
    } else {
      this.categoriaService.readById(Number(id)).subscribe(categoria => {
        this.categoria = categoria;
      });
    }
  }

  cancel(): void {
    this.router.navigate(['categoria']);

  }

  createCategoria(): void {
    this.categoriaService.create(this.categoria).subscribe(() => {
      this.categoriaService.showMessage(`Categoria ${this.categoria.nome} foi inserida com sucesso!`);
      this.router.navigate(["/categoria"]);
    });

  }

  updateCategoria(): void {
    this.categoriaService.update(this.categoria).subscribe(() => {
      this.categoriaService.showMessage(`Categoria ${this.categoria.nome} alterada com sucesso!`);
      this.router.navigate(["/categoria"]);
    });
  }

  saveCategoria(): void{
    if(this.categoria.id){
      this.updateCategoria();

    }else{
      this.createCategoria();
    }
  }

}
