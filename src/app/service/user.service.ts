import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel } from '../model/user.model';
import { Collection } from '../app.variables';
import { FirestoreService } from './firestore.service';

@Injectable()
export class UserService extends FirestoreService<UserModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore);
    this.collection = Collection.USER;
  }

  getByEmail(email: string): Observable<UserModel> {
    return this.findByField('email', email).pipe(map(docs => docs[0]));
  }

  updateLastLoginDateByEmail(email: string): void {
    this.getByEmail(email).subscribe(res => {
      res.lastLoginDate = new Date();
      this.update(res);
    });
  }

  updateIsEmailVerifiedByEmail(email: string): void {
    this.getByEmail(email).subscribe(res => {
      res.isEmailVerified = true;
      res.verifiedDate = new Date();
      this.update(res);
    });
  }
}
