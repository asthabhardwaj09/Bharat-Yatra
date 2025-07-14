import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';
  street: string = '';
  city: string = '';
  state: string = '';
  zipCode: string = '';
  country: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    const request = {
      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: {
        street: this.street,
        city: this.city,
        state: this.state,
        zipCode: this.zipCode,
        country: this.country
      },
      password: this.password,
      roles: ['USER']
    };

    this.authService.register(request, { responseType: 'text' }).subscribe({
      next: (res: string) => {
        alert(res); // "User registered successfully"
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error(err);
        this.errorMessage = typeof err.error === 'string' ? err.error : 'Something went wrong. Please try again.';
      }
    });
  }
}
