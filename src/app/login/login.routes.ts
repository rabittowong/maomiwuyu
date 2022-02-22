import { Routes } from '@angular/router';

import { LoginContentComponent } from './login-content.component';
import { LoginRegisterComponent } from './login-register.component';
import { LoginVerifyEmailComponent } from './login-verify-email.component';
import { LoginResetPasswordComponent } from './login-reset-password.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginContentComponent,
  },
  {
    path: 'register',
    component: LoginRegisterComponent,
  },
  {
    path: 'reset-password',
    component: LoginResetPasswordComponent,
  },
  {
    path: 'send-verification-mail',
    component: LoginVerifyEmailComponent,
    data: {
      mode: 'checking',
    },
  },
  {
    path: 'email-verified',
    component: LoginVerifyEmailComponent,
    data: {
      mode: 'verified',
    },
  },
];
