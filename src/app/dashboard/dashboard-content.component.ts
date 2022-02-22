import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel } from '../model/user.model';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  form = {
    data: {
      user: null as UserModel,
    },
  };

  constructor(private activatedRoute: ActivatedRoute,
              public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.form.data.user = this.activatedRoute.snapshot.data['user'];
  }
}
