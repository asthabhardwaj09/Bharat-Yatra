import { Routes } from '@angular/router';

// Home Components
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NewUserComponent } from './home/new-user/new-user.component';

// About Components
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './about/team/team.component';
import { MissionComponent } from './about/mission/mission.component';

// Service Components
import { ServiceComponent } from './service/service.component';
import { PlanComponent } from './service/plan/plan.component';
import { SupportComponent } from './service/support/support.component';

// Contact Components
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './contact/email/email.component';
import { CallComponent } from './contact/call/call.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'NewUser', component: NewUserComponent },

  { path: 'About', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'mission', component: MissionComponent },

  { path: 'Service', component: ServiceComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'support', component: SupportComponent },

  { path: 'Contact', component: ContactComponent },
  { path: 'email', component: EmailComponent },
  { path: 'call', component: CallComponent }

];
