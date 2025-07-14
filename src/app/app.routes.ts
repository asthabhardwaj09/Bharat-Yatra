import { Routes } from '@angular/router';

// Auth Components
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

// Layout and Common
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { authGuard } from './guards/auth.guard';

// Place Components
import { AddPlaceComponent } from './components/place/add-place/add-place.component';
import { UpdatePlaceComponent } from './components/place/update-place/update-place.component';
import { PlaceDescriptionComponent } from './components/place/place-description/place-description.component';

export const routes: Routes = [
  // Public Routes
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected Routes (Navbar + children)
  {
    path: '',
    component: NavbarComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },

      // Place Routes
      { path: 'place/add', component: AddPlaceComponent },
      { path: 'place/update/:id', component: UpdatePlaceComponent },
      { path: 'place/description/:id', component: PlaceDescriptionComponent },
    ]
  },

  // Optional: Wildcard route for 404
  { path: '**', redirectTo: 'login' }
];
