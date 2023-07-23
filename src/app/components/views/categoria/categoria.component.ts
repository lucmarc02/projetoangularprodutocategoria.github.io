import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

   constructor(private router: Router){}

   navigateToCategoria(): void {
    this.router.navigate(['/categoria/create']);
   }
}
