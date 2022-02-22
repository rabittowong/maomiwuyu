import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { EventContentComponent } from './event-content.component';
import { EventViewComponent } from './event-view.component';
import { EventModifyComponent } from './event-modify.component';
import { CustomPipeModule } from '../pipe/custom-pipe.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ResolveEventAll, ResolveEventByEventId } from '../resolve/event.resolve';
import { ResolveEventContentByEventId } from '../resolve/event-content.resolve';
import { ResolveEventRegistrationByEventId } from '../resolve/event-registration.resolve';
import { routes } from './event.routes';

@NgModule({
  declarations: [
    EventContentComponent,
    EventViewComponent,
    EventModifyComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ModalModule,
    CustomPipeModule,
    FormsModule,
    PaginationModule,
    BsDatepickerModule,
  ],
  providers: [
    ResolveEventAll,
    ResolveEventByEventId,
    ResolveEventContentByEventId,
    ResolveEventRegistrationByEventId,
  ],
})
export class EventModule {
}
