import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { AnnouncementContentModel } from '../model/announcement-content.model';
import { AnnouncementContentService } from '../service/announcement-content.service';

@Injectable()
export class ResolveAnnouncementContentByAnnouncementId implements Resolve<AnnouncementContentModel> {
  constructor(private announcementContentService: AnnouncementContentService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<AnnouncementContentModel> {
    const id = route.params['id'];
    return this.announcementContentService.getById(id);
  }
}
