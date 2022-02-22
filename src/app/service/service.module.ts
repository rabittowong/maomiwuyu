import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from './game.service';
import { GameRegistrationService } from './game-registration.service';
import { OperatorService } from './operator.service';
import { AnnouncementService } from './announcement.service';
import { AnnouncementContentService } from './announcement-content.service';
import { EventService } from './event.service';
import { EventContentService } from './event-content.service';
import { EventRegistrationService } from './event-registration.service';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    GameService,
    GameRegistrationService,
    OperatorService,
    AnnouncementService,
    AnnouncementContentService,
    EventService,
    EventContentService,
    EventRegistrationService,
    AuthenticationService,
    UserService,
  ],
})
export class ServiceModule {
}
