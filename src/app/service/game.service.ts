import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { GameModel } from '../model/game.model';
import { Collection } from '../app.variables';
import { FirestoreService } from './firestore.service';

@Injectable()
export class GameService extends FirestoreService<GameModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore);
    this.collection = Collection.GAME;
  }

  create(item: GameModel): Observable<void> {
    item.isEnabled = true;
    return super.create(item);
  }

  findByIsEnabled(isEnabled: boolean): Observable<GameModel[]> {
    return this.findByField('isEnabled', isEnabled);
  }
}
