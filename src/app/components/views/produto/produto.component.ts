import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  constructor(private router: Router) { }

  navigateToProduto(): void {
    this.router.navigate(['/produto/create']);
  }

}
