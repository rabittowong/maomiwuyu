import { Routes } from '@angular/router';

import { DashboardContentComponent } from './dashboard-content.component';
import { ResolveUser } from '../resolve/user.resolve';

export const routes: Routes = [
  {
    path: '',
    component: DashboardContentComponent,
    resolve: {
      user: ResolveUser,
    },
  },
];
