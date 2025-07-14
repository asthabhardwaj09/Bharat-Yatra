import { inject } from '@angular/core';  // Add this import
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
