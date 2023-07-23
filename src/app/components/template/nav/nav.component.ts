import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   user: Usuario = {
     id: 0,
     nome: '',
     login: '',
     admin: false
   };

   constructor(
     private router: Router,
     private authenticationService: AuthenticationService
   ){}

  ngOnInit(): void {
   this.user = this.authenticationService.currentUserValue.usuario;

  }

  logout(): void{
    if(window.confirm('Deseja sair do sistema?')){
     this.authenticationService.logout();
     this.router.navigate(['login']).then(()=>{
      window.location.reload();
     });
    }
  }

}
