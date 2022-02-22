import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { EventContentModel } from '../model/event-content.model';
import { Collection } from '../app.variables';
import { FirestoreService } from './firestore.service';

@Injectable()
export class EventContentService extends FirestoreService<EventContentModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore);
    this.collection = Collection.EVENT_CONTENT;
  }
}
