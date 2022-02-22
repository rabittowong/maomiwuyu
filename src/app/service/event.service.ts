import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { EventModel } from '../model/event.model';
import { Collection } from '../app.variables';
import { FirestoreService } from './firestore.service';
import { Observable } from 'rxjs';

@Injectable()
export class EventService extends FirestoreService<EventModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore);
    this.collection = Collection.EVENT;
  }

  createById(id: string, item: EventModel): Observable<void> {
    item.registrationCount = 0;
    return super.createById(id, item);
  }

  updateRegistrationCountById(id: string): void {
    this.getById(id).subscribe(res => {
      res.registrationCount = res.registrationCount + 1;
      this.update(res);
    })
  }
}
