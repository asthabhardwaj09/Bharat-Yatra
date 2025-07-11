import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  activeDropdown: string | null = null;

  constructor(private router: Router) {}

  toggleDropdown(menu: string | null) {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.activeDropdown = null;
    this.isMenuOpen = false;
  }

  toggleNavbar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }
}
