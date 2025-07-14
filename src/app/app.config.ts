import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ required

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(FormsModule) // ✅ add this
  ]
};
