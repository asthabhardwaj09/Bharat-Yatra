import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';                // Router import karo
import { Place } from '../../../models/place.model';
import { PlaceService } from '../../../services/place.service';

@Component({
  selector: 'app-add-place',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent {
  // Place object me required properties add karo
  place: Place = {
    name: '',
    location: '',
    description: '',
    category: '',
    descriptionBlocks: []
  };

  blockText = '';

  // Injection: Router and PlaceService dono inject karo
  constructor(private placeService: PlaceService, private router: Router) {}

  addBlock() {
    if (this.blockText.trim()) {
      this.place.descriptionBlocks.push(this.blockText.trim());
      this.blockText = '';
    }
  }

  submitForm() {
    this.placeService.addPlace(this.place).subscribe({
      next: () => {
        alert('Place added successfully!');
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        console.error(err);
        alert('Error adding place!');
      }
    });
  }
}
