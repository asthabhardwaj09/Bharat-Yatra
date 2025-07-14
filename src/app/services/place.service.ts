import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service'; // ✅ Ensure this path is correct
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private apiUrl = 'http://localhost:8080/api/place';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.apiUrl}/all`, this.authService.getAuthHeaders());
  }

  getPlaceById(id: string): Observable<Place> {
    return this.http.get<Place>(`${this.apiUrl}/${id}`, this.authService.getAuthHeaders());
  }

  addPlace(place: Place): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, place, this.authService.getAuthHeaders());
  }
}
