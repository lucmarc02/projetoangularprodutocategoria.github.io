import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string): void{
this.snackBar.open(msg, 'X', {
  duration: 5000,
  horizontalPosition: "right",
  verticalPosition: "top"
  });
 }

 // Recebe as produtos do backend
 read(): Observable<Produto[]>{ // "GET - http://localhost:8080/vendas-api/produto"
   return this.http.get<Produto[]>(`${this.baseUrl}/produto`);
 }

 // Envia um objeto (Json) para gravar mp bacjend
 create(produto: Produto): Observable<Produto>{ // "POST - http://localhost:8080/vendas-api/produto"
   return this.http.post<Produto>(`${this.baseUrl}/produto`, produto);
 }

 // Envia um objeto (Json) para alterar no backend
 update(produto: Produto): Observable<Produto> {  // "PUT - http://localhost:8080/vendas-api/produto"
  return this.http.put<Produto>(`${this.baseUrl}/produto`, produto);
}

 // RECEBE um objeto (Json) Do backend
 readById(id: number): Observable<Produto> {  // "GET - http://localhost:8080/vendas-api/produto"
  return this.http.get<Produto>(`${this.baseUrl}/produto/${id}`);
}
 // DELETAR um objeto (Json) Do backend
 deleteById(id: number): Observable<Produto> {  // "DELETE - http://localhost:8080/vendas-api/produto"
  return this.http.delete<Produto>(`${this.baseUrl}/produto/${id}`);
}

}
