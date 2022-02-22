import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  form = {
    data: {
      characterName: null as string,
      email: null as string,
      password: null as string,
    },
    ui: {
      proceeded: false as boolean,
      submitted: false as boolean,
      error: null as string,
    },
  };

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
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

    this.authenticationService.registerWithEmail(this.form.data.email, this.form.data.password, this.form.data.characterName).subscribe(() => {
      this.form.ui.submitted = true;
      this.router.navigate(['/login/send-verification-mail/']);
    }, err => {
      this.form.ui.error = err;
    });
  }

  ngOnInit(): void {
  }
}
