import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLogin = true;

  user: any = this.getEmptyUser();
  confirmPassword = '';

  constructor(private router: Router) {}

  // Reset user object
  getEmptyUser() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
      },
      password: ''
    };
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.user = this.getEmptyUser();
    this.confirmPassword = '';
  }

  onSubmit() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (this.isLogin) {
      const loginInput = this.user.email.trim();
      const passwordInput = this.user.password;

      const match = users.find((u: any) =>
        ((u.email === loginInput || u.phone === loginInput) &&
         u.password === passwordInput)
      );

      if (match) {
        localStorage.setItem('loggedInUser', JSON.stringify(match));
        alert('✅ Login successful!');
        this.router.navigate(['/home']);
      } else {
        alert('❌ Invalid email/phone or password!');
      }

    } else {
      const { firstName, lastName, email, phone, address, password } = this.user;

      if (
        !firstName || !lastName || !email || !phone ||
        !address.street || !address.city || !address.state ||
        !address.zipCode || !address.country || !password || !this.confirmPassword
      ) {
        alert('⚠️ All fields are required!');
        return;
      }

      const exists = users.find((u: any) => u.email === email || u.phone === phone);
      if (exists) {
        alert('⚠️ Email or phone already registered!');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('⚠️ Please enter a valid email!');
        return;
      }

      if (password !== this.confirmPassword) {
        alert('❌ Passwords do not match!');
        return;
      }

      users.push(this.user);
      localStorage.setItem('users', JSON.stringify(users));
      alert('✅ Registration successful! Please login.');
      this.toggleMode();
    }
  }
}
