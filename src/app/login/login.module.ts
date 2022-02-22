import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginContentComponent } from './login-content.component';
import { LoginRegisterComponent } from './login-register.component';
import { LoginVerifyEmailComponent } from './login-verify-email.component';
import { LoginResetPasswordComponent } from './login-reset-password.component';
import { routes } from './login.routes';

@NgModule({
  declarations: [
    LoginContentComponent,
    LoginRegisterComponent,
    LoginVerifyEmailComponent,
    LoginResetPasswordComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ],
})
export class LoginModule {
}
