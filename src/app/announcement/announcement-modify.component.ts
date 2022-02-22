import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

import { AnnouncementModel } from '../model/announcement.model';
import { AnnouncementService } from '../service/announcement.service';
import { AnnouncementContentModel } from '../model/announcement-content.model';
import { AnnouncementContentService } from '../service/announcement-content.service';

@Component({
  templateUrl: './announcement-modify.component.html',
  styleUrls: ['./announcement-modify.component.scss']
})
export class AnnouncementModifyComponent implements OnInit {
  form = {
    data: {
      id: null as string,
      announcement: null as AnnouncementModel,
      announcementContent: null as AnnouncementContentModel,
    },
    ui: {
      mode: null as string,
      proceeded: false as boolean,
      submitted: false as boolean,
    }
  };

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private announcementService: AnnouncementService,
              private announcementContentService: AnnouncementContentService) {
  }

  replaceRegexNewLine(str: string): string {
    return str ? str.replace(/\r?\n/g, '<br>') : '';
  }

  replaceHtmlNewLine(str: string): string {
    return str ? str.replace(/<br>/g, '\n') : '';
  }

  onProceed(isValid: boolean): void {
    this.form.ui.proceeded = true;
    if (isValid) {
      this.onSubmit();
    }
  }

  onSubmit(): void {
    let observables: Observable<any>[];

    if (this.form.ui.mode === 'create') {
      this.form.data.id = this.announcementService.generateId();
      observables = [
        this.announcementService.createById(this.form.data.id, this.form.data.announcement),
        this.announcementContentService.createById(this.form.data.id, this.form.data.announcementContent)
      ];
    } else {
      observables = [
        this.announcementService.updateById(this.form.data.id, this.form.data.announcement),
        this.announcementContentService.updateById(this.form.data.id, this.form.data.announcementContent)
      ];
    }

    forkJoin(...observables).subscribe(() => {
      this.router.navigate(['/announcement/view/', this.form.data.id]);
    });
  }

  ngOnInit(): void {
    this.form.data.id = this.activatedRoute.snapshot.params['id'];
    this.form.data.announcement = this.activatedRoute.snapshot.data['announcement'] || new AnnouncementModel();
    this.form.data.announcementContent = this.activatedRoute.snapshot.data['announcementContent'] || new AnnouncementContentModel();
    this.form.ui.mode = this.activatedRoute.snapshot.data['mode'];
  }
}
