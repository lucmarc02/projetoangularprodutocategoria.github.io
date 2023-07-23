import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  user: Usuario = {
    id: 0,
    nome: '',
    login: '',
    admin: false
  };

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue.usuario;
  }

}
