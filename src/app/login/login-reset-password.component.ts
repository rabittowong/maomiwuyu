import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  templateUrl: './login-reset-password.component.html',
  styleUrls: ['./login-reset-password.component.scss']
})
export class LoginResetPasswordComponent implements OnInit {
  form = {
    data: {
      email: null as string,
    },
    ui: {
      proceeded: false as boolean,
      submitted: false as boolean,
      error: null as string,
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
    this.form.ui.submitted = false;
    this.form.ui.error = null;

    this.authenticationService.resetPassword(this.form.data.email).subscribe(() => {
      this.form.ui.submitted = true;
    }, err => {
      this.form.ui.error = err;
    });
  }

  ngOnInit(): void {
  }
}
