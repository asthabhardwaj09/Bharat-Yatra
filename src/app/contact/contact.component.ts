import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true, // ✅ Important for standalone component
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // ✅ fixed typo (was styleUrl)
})
export class ContactComponent {}
