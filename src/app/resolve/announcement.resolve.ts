import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { AnnouncementModel } from '../model/announcement.model';
import { AnnouncementService } from '../service/announcement.service';

@Injectable()
export class ResolveEnabledAnnouncement implements Resolve<AnnouncementModel[]> {
  constructor(private announcementService: AnnouncementService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<AnnouncementModel[]> {
    return this.announcementService.findByIsEnabled(true);
  }
}

@Injectable()
export class ResolveAnnouncementByAnnouncementId implements Resolve<AnnouncementModel> {
  constructor(private announcementService: AnnouncementService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<AnnouncementModel> {
    const id = route.params['id'];
    return this.announcementService.getById(id);
  }
}
