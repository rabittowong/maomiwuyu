import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
      { path: 'announcement', loadChildren: './announcement/announcement.module#AnnouncementModule' },
      { path: 'event', loadChildren: './event/event.module#EventModule' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    ],
  },
  { path: '**', redirectTo: '' },
];
