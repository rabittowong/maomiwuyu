import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { AnnouncementModel } from '../model/announcement.model';
import { Collection } from '../app.variables';
import { FirestoreService } from './firestore.service';

@Injectable()
export class AnnouncementService extends FirestoreService<AnnouncementModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore);
    this.collection = Collection.ANNOUNCEMENT;
  }

  createById(id: string, item: AnnouncementModel): Observable<void> {
    item.readCount = 0;
    item.isEnabled = true;
    return super.createById(id, item);
  }

  findByIsEnabled(isEnabled: boolean): Observable<AnnouncementModel[]> {
    return this.findByField('isEnabled', isEnabled);
  }

  updateReadCountById(id: string): void {
    this.getById(id).subscribe(res => {
      res.readCount = res.readCount + 1;
      this.update(res);
    });
  }
}
