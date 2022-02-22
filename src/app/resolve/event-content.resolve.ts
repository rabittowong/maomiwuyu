import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { EventContentModel } from '../model/event-content.model';
import { EventContentService } from '../service/event-content.service';

@Injectable()
export class ResolveEventContentByEventId implements Resolve<EventContentModel> {
  constructor(private eventContentService: EventContentService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<EventContentModel> {
    const id = route.params['id'];
    return this.eventContentService.getById(id);
  }
}
