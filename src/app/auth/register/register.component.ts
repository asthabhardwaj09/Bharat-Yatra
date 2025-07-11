import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    email: '',
    password: ''
  };
  confirmPassword = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find((u: any) => u.email === this.user.email);
    if (exists) {
      alert('Email already exists');
      return;
    }

    users.push(this.user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    this.router.navigate(['/login']);
  }
}
