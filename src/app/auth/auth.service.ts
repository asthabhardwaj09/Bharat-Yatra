import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }

    return false;
  }

  register(user: {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
    roles: string[];
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  }): boolean {
    const users = this.getUsers();
    const existing = users.find((u: any) => u.email === user.email);
    if (existing) return false;

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  private getUsers(): any[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }
}
