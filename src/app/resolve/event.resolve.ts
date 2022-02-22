import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { EventModel } from '../model/event.model';
import { EventService } from '../service/event.service';

@Injectable()
export class ResolveEventAll implements Resolve<EventModel[]> {
  constructor(private eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<EventModel[]> {
    return this.eventService.findAll();
  }
}

@Injectable()
export class ResolveEventByEventId implements Resolve<EventModel> {
  constructor(private eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<EventModel> {
    const id = route.params['id'];
    return this.eventService.getById(id);
  }
}
