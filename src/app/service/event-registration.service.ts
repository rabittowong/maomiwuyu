import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { EventRegistrationModel } from '../model/event-registration.model';
import { Collection } from '../app.variables';
import { FirestoreService } from './firestore.service';

@Injectable()
export class EventRegistrationService extends FirestoreService<EventRegistrationModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore);
    this.collection = Collection.EVENT_REGISTRATION;
  }

  findByEventId(eventId: string): Observable<EventRegistrationModel[]> {
    return this.findByField('eventId', eventId);
  }
}
