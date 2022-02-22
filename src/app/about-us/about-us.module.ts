import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutUsContentComponent } from './about-us-content.component';
import { ResolveGameAll } from '../resolve/game.resolve';
import { ResolveEnabledOperator } from '../resolve/operator.resolve';
import { routes } from './about-us.routes';

@NgModule({
  declarations: [
    AboutUsContentComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [
    ResolveGameAll,
    ResolveEnabledOperator,
  ],
})
export class AboutUsModule {
}
