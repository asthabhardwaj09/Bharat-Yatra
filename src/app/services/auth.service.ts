import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  register(data: any, options?: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data, { ...options });
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // ✅ ADD THIS METHOD BELOW
  getAuthHeaders() {
    const token = localStorage.getItem('token'); // or sessionStorage if you prefer
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }
}
