import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { UserModel } from '../model/user.model';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class ResolveUser implements Resolve<UserModel> {
  constructor(private authenticationService: AuthenticationService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<UserModel> {
    return this.authenticationService.getUser();
  }
}
