import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { OperatorModel } from '../model/operator.model';
import { Collection } from '../app.variables';
import { FirestoreService } from './firestore.service';

@Injectable()
export class OperatorService extends FirestoreService<OperatorModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore);
    this.collection = Collection.OPERATOR;
  }

  create(item: OperatorModel): Observable<void> {
    item.isEnabled = true;
    return super.create(item);
  }

  findByIsEnabled(isEnabled: boolean): Observable<OperatorModel[]> {
    return this.findByField('isEnabled', isEnabled);
  }
}
