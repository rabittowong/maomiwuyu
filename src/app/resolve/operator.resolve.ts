import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { OperatorModel } from '../model/operator.model';
import { OperatorService } from '../service/operator.service';

@Injectable()
export class ResolveEnabledOperator implements Resolve<OperatorModel[]> {
  constructor(private operatorService: OperatorService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<OperatorModel[]> {
    return this.operatorService.findByIsEnabled(true);
  }
}
