import { Routes } from '@angular/router';

import { AboutUsContentComponent } from './about-us-content.component';
import { ResolveGameAll } from '../resolve/game.resolve';
import { ResolveEnabledOperator } from '../resolve/operator.resolve';

export const routes: Routes = [
  {
    path: '',
    component: AboutUsContentComponent,
    resolve: {
      gameList: ResolveGameAll,
      operatorList: ResolveEnabledOperator,
    },
  },
];
