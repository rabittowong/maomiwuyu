import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

import { AnnouncementContentComponent } from './announcement-content.component';
import { AnnouncementViewComponent } from './announcement-view.component';
import { AnnouncementModifyComponent } from './announcement-modify.component';
import { CustomPipeModule } from '../pipe/custom-pipe.module';
import { ResolveAnnouncementByAnnouncementId, ResolveEnabledAnnouncement } from '../resolve/announcement.resolve';
import { ResolveAnnouncementContentByAnnouncementId } from '../resolve/announcement-content.resolve';
import { routes } from './announcement.routes';

@NgModule({
  declarations: [
    AnnouncementContentComponent,
    AnnouncementViewComponent,
    AnnouncementModifyComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CustomPipeModule,
    PaginationModule,
    FormsModule,
  ],
  providers: [
    ResolveEnabledAnnouncement,
    ResolveAnnouncementByAnnouncementId,
    ResolveAnnouncementContentByAnnouncementId,
  ],
})
export class AnnouncementModule {
}
