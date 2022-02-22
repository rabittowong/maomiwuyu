import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnnouncementModel } from '../model/announcement.model';
import { AnnouncementService } from '../service/announcement.service';
import { AnnouncementContentModel } from '../model/announcement-content.model';

@Component({
  templateUrl: './announcement-view.component.html',
  styleUrls: ['./announcement-view.component.scss']
})
export class AnnouncementViewComponent implements OnInit {
  form = {
    data: {
      id: null as string,
      announcement: null as AnnouncementModel,
      announcementContent: null as AnnouncementContentModel,
    },
  };

  constructor(private activatedRoute: ActivatedRoute,
              private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.form.data.id = this.activatedRoute.snapshot.params['id'];
    this.form.data.announcement = this.activatedRoute.snapshot.data['announcement'];
    this.form.data.announcementContent = this.activatedRoute.snapshot.data['announcementContent'];

    this.announcementService.updateReadCountById(this.form.data.id);
  }
}
