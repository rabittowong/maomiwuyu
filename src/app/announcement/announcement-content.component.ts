import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { AnnouncementModel } from '../model/announcement.model';
import { AuthenticationService } from '../service/authentication.service';
import * as moment from 'moment';

@Component({
  templateUrl: './announcement-content.component.html',
  styleUrls: ['./announcement-content.component.scss']
})
export class AnnouncementContentComponent implements OnInit {
  @ViewChild('announcementTitle') announcementTitle: ElementRef;

  form = {
    data: {
      announcementList: [] as AnnouncementModel[],
      slicedAnnouncementList: [] as AnnouncementModel[],
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

  onViewAnnouncement(id: string): void {
    this.router.navigate([`/announcement/view/`, id]);
  }

  onPageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = (event.page) * event.itemsPerPage;
    this.form.data.slicedAnnouncementList = this.form.data.announcementList.slice(startItem, endItem);
    (this.announcementTitle.nativeElement as HTMLElement).scrollIntoView();
  }

  ngOnInit(): void {
    this.form.data.announcementList = (this.activatedRoute.snapshot.data['announcementList'] as AnnouncementModel[]).sort((a, b) => {
      return b.createdDate.getTime() - a.createdDate.getTime();
    });
    this.form.data.slicedAnnouncementList = this.form.data.announcementList.slice(0, this.form.options.itemsPerPage);
    this.form.ui.loggedIn = this.authenticationService.isLoggedIn();
  }
}
