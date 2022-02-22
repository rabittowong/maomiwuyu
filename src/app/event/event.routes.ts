import { Routes } from '@angular/router';

import { EventContentComponent } from './event-content.component';
import { EventViewComponent } from './event-view.component';
import { EventModifyComponent } from './event-modify.component';
import { ResolveEventAll, ResolveEventByEventId } from '../resolve/event.resolve';
import { ResolveEventContentByEventId } from '../resolve/event-content.resolve';
import { ResolveEventRegistrationByEventId } from '../resolve/event-registration.resolve';

export const routes: Routes = [
  {
    path: '',
    component: EventContentComponent,
    resolve: {
      eventList: ResolveEventAll,
    },
  },
  {
    path: 'view/:id',
    component: EventViewComponent,
    resolve: {
      event: ResolveEventByEventId,
      eventContent: ResolveEventContentByEventId,
      eventRegistrationList: ResolveEventRegistrationByEventId,
    },
  },
  {
    path: 'create',
    component: EventModifyComponent,
    data: {
      mode: 'create',
    },
  },
  {
    path: 'modify/:id',
    component: EventModifyComponent,
    data: {
      mode: 'modify',
    },
    resolve: {
      event: ResolveEventByEventId,
      eventContent: ResolveEventContentByEventId,
    },
  },
];
