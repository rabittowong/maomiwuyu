import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';

import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';

@Component({
  templateUrl: './login-verify-email.component.html',
  styleUrls: ['./login-verify-email.component.scss']
})
export class LoginVerifyEmailComponent implements OnInit {
  form = {
    ui: {
      mode: null as string,
    },
  };

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.form.ui.mode = this.activatedRoute.snapshot.data['mode'];

    if (this.form.ui.mode === 'verified') {
      this.authenticationService.getUser().subscribe(res => {
        this.userService.updateIsEmailVerifiedByEmail(res.email);
      });

      timer(5000).subscribe(() => {
        this.router.navigate(['/dashboard/']);
      });
    }
  }
}
