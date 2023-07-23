import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

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

 // Recebe as categorias do backend
 read(): Observable<Categoria[]>{ // "GET - http://localhost:8080/vendas-api/categoria"
   return this.http.get<Categoria[]>(`${this.baseUrl}/categoria`);
 }

 // Envia um objeto (Json) para gravar mp bacjend
 create(categoria: Categoria): Observable<Categoria>{ // "POST - http://localhost:8080/vendas-api/categoria"
   return this.http.post<Categoria>(`${this.baseUrl}/categoria`, categoria);
 }

 // Envia um objeto (Json) para alterar no backend
 update(categoria: Categoria): Observable<Categoria> {  // "PUT - http://localhost:8080/vendas-api/categoria"
  return this.http.put<Categoria>(`${this.baseUrl}/categoria`, categoria);
}

 // RECEBE um objeto (Json) Do backend
 readById(id: number): Observable<Categoria> {  // "GET - http://localhost:8080/vendas-api/categoria"
  return this.http.get<Categoria>(`${this.baseUrl}/categoria/${id}`);
}
 // DELETAR um objeto (Json) Do backend
 deleteById(id: number): Observable<Categoria> {  // "DELETE - http://localhost:8080/vendas-api/categoria"
  return this.http.delete<Categoria>(`${this.baseUrl}/categoria/${id}`);
}

}
