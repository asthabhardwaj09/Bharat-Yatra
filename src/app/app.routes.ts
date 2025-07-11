import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NewUserComponent } from './home/new-user/new-user.component';

import { AboutComponent } from './about/about.component';
import { TeamComponent } from './about/team/team.component';
import { MissionComponent } from './about/mission/mission.component';

import { ServiceComponent } from './service/service.component';
import { PlanComponent } from './service/plan/plan.component';
import { SupportComponent } from './service/support/support.component';

import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './contact/email/email.component';
import { CallComponent } from './contact/call/call.component';

import { AuthGuard } from './auth.guard'; // ✅ correct import

export const routes: Routes = [
  { path: '', component: AuthComponent }, // Login/Register

  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [AuthGuard], // ✅ apply guard here
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'new-user', component: NewUserComponent },

      { path: 'about', component: AboutComponent },
      { path: 'team', component: TeamComponent },
      { path: 'mission', component: MissionComponent },

      { path: 'service', component: ServiceComponent },
      { path: 'plan', component: PlanComponent },
      { path: 'support', component: SupportComponent },

      { path: 'contact', component: ContactComponent },
      { path: 'email', component: EmailComponent },
      { path: 'call', component: CallComponent },
    ]
  },

  { path: '**', redirectTo: '' } // fallback route
];
