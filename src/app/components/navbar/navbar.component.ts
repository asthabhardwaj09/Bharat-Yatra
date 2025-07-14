import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showDropdown = false;
  showAuthDropdown = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleAuthDropdown() {
    this.showAuthDropdown = !this.showAuthDropdown;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
