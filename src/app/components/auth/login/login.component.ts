import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const loginRequest = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginRequest).subscribe({
      next: (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Login failed. No token received.';
        }
      },
      error: (err) => {
        console.error(err);
        if (err.status === 401) {
          this.errorMessage = 'Invalid email or password';
        } else {
          this.errorMessage = 'Something went wrong. Please try again.';
        }
      }
    });
  }
}
