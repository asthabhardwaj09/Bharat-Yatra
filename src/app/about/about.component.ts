import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true, // ✅ Needed for standalone component
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] // ✅ Fixed: should be `styleUrls`, not `styleUrl`
})
export class AboutComponent {}
