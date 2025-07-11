import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router) {}

  canActivateChild(): boolean {
    const isLoggedIn = !!localStorage.getItem('loggedInUser');
    if (!isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
