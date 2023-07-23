import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Credentials } from 'src/app/models/credentials.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  credential: Credentials = {
    login: '',
    senha: ''
  }

  hide = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

    if (this.authenticationService.currentUserValue.token) {
      this.router.navigate(['/']);
    }

  }



  onSubmit() {
    this.authenticationService.login(this.credential)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl =
            this.route.snapshot.queryParams['returnUrl']
            || '/';
          this.router.navigate([returnUrl])
            .then(() => {
              window.location.reload();
            });
        },
        error: (error) => {
          console.log('Erro ao logar', error);
        }

      })
  }

}
