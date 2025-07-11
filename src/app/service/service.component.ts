import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true, // ✅ Important for standalone component setup
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'] // ✅ Fixed typo: `styleUrl` → `styleUrls`
})
export class ServiceComponent {}
