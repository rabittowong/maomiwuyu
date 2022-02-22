import { Routes } from '@angular/router';

import { HomeContentComponent } from './home-content.component';
import { ResolveEnabledGame } from '../resolve/game.resolve';

export const routes: Routes = [
  {
    path: '',
    component: HomeContentComponent,
    resolve: {
      gameList: ResolveEnabledGame,
    },
  },
];
