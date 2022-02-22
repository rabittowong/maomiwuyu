import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ActivatedRoute, Router } from '@angular/router';

import { EventModel } from '../model/event.model';
import { AuthenticationService } from '../service/authentication.service';
import * as moment from 'moment';

@Component({
  templateUrl: './event-content.component.html',
  styleUrls: ['./event-content.component.scss']
})
export class EventContentComponent implements OnInit {
  @ViewChild('eventTitle') eventTitle: ElementRef;

  form = {
    data: {
      eventList: [] as EventModel[],
      slicedEventList: [] as EventModel[],
    },
    ui: {
      loggedIn: false as boolean,
    },
    options: {
      itemsPerPage: 15 as number,
    }
  };

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  isNew(createdDate: Date): boolean {
    return moment().diff(createdDate, 'days', true) <= 3;
  }

  onViewEvent(eventId: string): void {
    this.router.navigate([`/event/view/`, eventId]);
  }

  onPageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = (event.page) * event.itemsPerPage;
    this.form.data.slicedEventList = this.form.data.eventList.slice(startItem, endItem);
    (this.eventTitle.nativeElement as HTMLElement).scrollIntoView();
  }

  ngOnInit(): void {
    this.form.data.eventList = (this.activatedRoute.snapshot.data['eventList'] as EventModel[]).sort((a, b) => {
      return b.createdDate.getTime() - a.createdDate.getTime();
    });
    this.form.data.slicedEventList = this.form.data.eventList.slice(0, this.form.options.itemsPerPage);
    this.form.ui.loggedIn = this.authenticationService.isLoggedIn();
  }
}
