import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  private checkLogin(): boolean {
    const isLoggedIn = !!localStorage.getItem('loggedInUser');
    if (!isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  canActivate(): boolean {
    return this.checkLogin();
  }

  canActivateChild(): boolean {
    return this.checkLogin();
  }
}
