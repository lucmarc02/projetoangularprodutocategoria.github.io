import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authenticationService = inject(AuthenticationService);

  const currentUser = authenticationService.currentUserValue;
  if (currentUser && currentUser.token) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }


};
