import { Routes } from '@angular/router';

import { AnnouncementContentComponent } from './announcement-content.component';
import { AnnouncementViewComponent } from './announcement-view.component';
import { AnnouncementModifyComponent } from './announcement-modify.component';
import { ResolveAnnouncementByAnnouncementId, ResolveEnabledAnnouncement } from '../resolve/announcement.resolve';
import { ResolveAnnouncementContentByAnnouncementId } from '../resolve/announcement-content.resolve';

export const routes: Routes = [
  {
    path: '',
    component: AnnouncementContentComponent,
    resolve: {
      announcementList: ResolveEnabledAnnouncement,
    },
  },
  {
    path: 'view/:id',
    component: AnnouncementViewComponent,
    resolve: {
      announcement: ResolveAnnouncementByAnnouncementId,
      announcementContent: ResolveAnnouncementContentByAnnouncementId,
    },
  },
  {
    path: 'create',
    component: AnnouncementModifyComponent,
    data: {
      mode: 'create',
    },
  },
  {
    path: 'modify/:id',
    component: AnnouncementModifyComponent,
    data: {
      mode: 'modify',
    },
    resolve: {
      announcement: ResolveAnnouncementByAnnouncementId,
      announcementContent: ResolveAnnouncementContentByAnnouncementId,
    },
  },
];
