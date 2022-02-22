import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { GameModel } from '../model/game.model';
import { GameService } from '../service/game.service';

@Injectable()
export class ResolveGameAll implements Resolve<GameModel[]> {
  constructor(private gameService: GameService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<GameModel[]> {
    return this.gameService.findAll();
  }
}

@Injectable()
export class ResolveEnabledGame implements Resolve<GameModel[]> {
  constructor(private gameService: GameService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<GameModel[]> {
    return this.gameService.findByIsEnabled(true);
  }
}
