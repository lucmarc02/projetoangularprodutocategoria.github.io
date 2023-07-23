import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit{

  user: Usuario = {
    id: 0,
    nome: '',
    login: '',
    admin: false
  };

  categorias: Categoria[] = [];
  displayedColumns: string[] = ["id", "categoria", "actions"]

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

  ngOnInit(): void {
    this.readCategorias();
    this.user = this.authenticationService.currentUserValue.usuario;
  }




  readCategorias(): void{
    this.categoriaService.read().subscribe(res => {
      this.categorias = res;
    });
  }

  deleteCategoriaById(id: any): void {
    if(window.confirm('Confirma a exclusão da categoria')){
      this.categoriaService.deleteById(id).subscribe(()=>{
        this.categoriaService.showMessage("Categoria excluída com sucesso!!!");
        this.readCategorias();
        this.router.navigate(['/categoria']);
      });
    }

  }
}
