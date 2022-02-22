import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AnnouncementContentModel } from '../model/announcement-content.model';
import { Collection } from '../app.variables';
import { FirestoreService } from './firestore.service';

@Injectable()
export class AnnouncementContentService extends FirestoreService<AnnouncementContentModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore);
    this.collection = Collection.ANNOUNCEMENT_CONTENT;
  }
}
