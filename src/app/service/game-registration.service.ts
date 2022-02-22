import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { GameRegistrationModel } from '../model/game-registration.model';
import { Collection } from '../app.variables';
import { FirestoreService } from './firestore.service';

@Injectable()
export class GameRegistrationService extends FirestoreService<GameRegistrationModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore);
    this.collection = Collection.GAME_REGISTRATION;
  }
}
