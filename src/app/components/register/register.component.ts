import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  usuario: Usuario = {
    id: 0,
    nome: '',
    senha: '',
    login: '',
    admin: false,
  }

  hide: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  register() {
    this.authenticationService.register(this.usuario)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl])
            .then(() => {
              window.location.reload();
            });
        },
        error: (error) => {
          console.log('Error', error);
        }
      })
  }

}
