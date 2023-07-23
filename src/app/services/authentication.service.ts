import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials.model';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );

    this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(credential: Credentials){
    return this.http.post<any>(`${environment.baseUrl}/usuarios/auth`, credential).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));

  }

  register(usuario: Usuario){

    return this.http.post<any>(
     `${environment.baseUrl}/usuarios/register`, usuario
    ).pipe(map(user => {
      console.log('Usuario Registrado', user);
      return user;
    }))

  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
