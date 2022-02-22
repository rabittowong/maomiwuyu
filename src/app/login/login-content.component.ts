import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss']
})
export class LoginContentComponent implements OnInit {
  form = {
    data: {
      email: null as string,
      password: null as string,
    },
    ui: {
      proceeded: false as boolean,
      submitted: false as boolean,
    },
  };

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  onProceed(isValid: boolean): void {
    this.form.ui.proceeded = true;
    if (isValid) {
      this.onSubmit();
    }
  }

  onSubmit(): void {
    this.authenticationService.loginWithEmail(this.form.data.email, this.form.data.password).subscribe(() => {
      this.router.navigate(['/dashboard/']);
    });
  }

  onLoginWithGoogle(): void {
    this.authenticationService.loginWithGoogle().subscribe(() => {
      this.router.navigate(['/dashboard/']);
    });
  }

  onResetPassword(): void {
    this.router.navigate(['/reset-password/']);
  }

  ngOnInit(): void {
  }
}
