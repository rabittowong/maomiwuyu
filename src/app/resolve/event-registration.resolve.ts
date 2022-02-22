import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { EventRegistrationModel } from '../model/event-registration.model';
import { EventRegistrationService } from '../service/event-registration.service';

@Injectable()
export class ResolveEventRegistrationByEventId implements Resolve<EventRegistrationModel[]> {
  constructor(private eventRegistrationService: EventRegistrationService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<EventRegistrationModel[]> {
    const eventId = route.params['id'];
    return this.eventRegistrationService.findByEventId(eventId);
  }
}
