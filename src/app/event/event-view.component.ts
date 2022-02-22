import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { EventModel } from '../model/event.model';
import { EventService } from '../service/event.service';
import { EventContentModel } from '../model/event-content.model';
import { EventContentService } from '../service/event-content.service';
import { EventRegistrationModel } from '../model/event-registration.model';
import { EventRegistrationService } from '../service/event-registration.service';
import * as moment from 'moment';

@Component({
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {
  @ViewChild('eventRegistrationModal') eventRegistrationModal: ModalDirective;

  form = {
    data: {
      id: null as string,
      event: null as EventModel,
      eventContent: null as EventContentModel,
      eventRegistrationList: [] as EventRegistrationModel[],
    },
    modal: {
      eventRegistration: new EventRegistrationModel() as EventRegistrationModel,
    },
    ui: {
      proceeded: false as boolean,
      submitted: false as boolean,
    }
  };

  constructor(private activatedRoute: ActivatedRoute,
              private eventService: EventService,
              private eventContentService: EventContentService,
              private eventRegistrationService: EventRegistrationService) {
  }

  isRegistrationEnd(): boolean {
    if (this.form.data.event.registrationEndDate) {
      const registrationEndDate = moment(this.form.data.event.registrationEndDate).startOf('day');
      return moment().startOf('day').diff(registrationEndDate, 'days') > 0;
    } else {
      return false;
    }
  }

  onShowEventRegistrationModal(): void {
    this.form.modal.eventRegistration = new EventRegistrationModel();
    this.form.modal.eventRegistration.eventId = this.form.data.id;
    this.form.modal.eventRegistration.eventName = this.form.data.event.name;
    this.eventRegistrationModal.show();
  }

  onProceed(isValid: boolean): void {
    this.form.ui.proceeded = true;
    if (isValid) {
      this.onSubmit();
    }
  }

  onSubmit(): void {
    this.form.modal.eventRegistration.createdDate = new Date();

    this.eventRegistrationService.create(this.form.modal.eventRegistration).subscribe(() => {
      this.eventService.updateRegistrationCountById(this.form.data.id);
      this.form.data.event.registrationCount = this.form.data.event.registrationCount + 1;
      this.form.data.eventRegistrationList.push(this.form.modal.eventRegistration);
      this.eventRegistrationModal.hide();
    });
  }

  ngOnInit(): void {
    this.form.data.id = this.activatedRoute.snapshot.params['id'];
    this.form.data.event = this.activatedRoute.snapshot.data['event'];
    this.form.data.eventContent = this.activatedRoute.snapshot.data['eventContent'];
    this.form.data.eventRegistrationList = (this.activatedRoute.snapshot.data['eventRegistrationList'] as EventRegistrationModel[]).sort((a, b) => {
      return a.createdDate.getTime() - b.createdDate.getTime();
    });
  }
}
