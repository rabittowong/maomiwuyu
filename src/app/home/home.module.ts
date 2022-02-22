import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeContentComponent } from './home-content.component';
import { ResolveEnabledGame } from '../resolve/game.resolve';
import { routes } from './home.routes';

@NgModule({
  declarations: [
    HomeContentComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ],
  providers: [
    ResolveEnabledGame,
  ],
})
export class HomeModule {
}
