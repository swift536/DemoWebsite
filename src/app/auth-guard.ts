import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';

export const canActivateDashboard = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (!authService.isExpired()) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/login');
};
