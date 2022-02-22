import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

import { EventModel } from '../model/event.model';
import { EventService } from '../service/event.service';
import { EventContentModel } from '../model/event-content.model';
import { EventContentService } from '../service/event-content.service';

@Component({
  templateUrl: './event-modify.component.html',
  styleUrls: ['./event-modify.component.scss']
})
export class EventModifyComponent implements OnInit {
  form = {
    data: {
      id: null as string,
      event: null as EventModel,
      eventContent: null as EventContentModel,
    },
    ui: {
      mode: null as string,
      proceeded: false as boolean,
      submitted: false as boolean,
    }
  };

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private eventService: EventService,
              private eventContentService: EventContentService) {
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
      this.form.data.id = this.eventService.generateId();
      observables = [
        this.eventService.createById(this.form.data.id, this.form.data.event),
        this.eventContentService.createById(this.form.data.id, this.form.data.eventContent)
      ];
    } else {
      observables = [
        this.eventService.updateById(this.form.data.id, this.form.data.event),
        this.eventContentService.updateById(this.form.data.id, this.form.data.eventContent)
      ];
    }

    forkJoin(...observables).subscribe(() => {
      this.router.navigate(['/event/view/', this.form.data.id]);
    });
  }

  ngOnInit(): void {
    this.form.data.id = this.activatedRoute.snapshot.params['id'];
    this.form.data.event = this.activatedRoute.snapshot.data['event'] || new EventModel();
    this.form.data.eventContent = this.activatedRoute.snapshot.data['eventContent'] || new EventContentModel();
    this.form.ui.mode = this.activatedRoute.snapshot.data['mode'];
  }
}
