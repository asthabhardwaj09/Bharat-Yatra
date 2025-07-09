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
    this.activeDropdown = menu;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.activeDropdown = null; // dropdown close after navigation
  }

  toggleNavbar() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
