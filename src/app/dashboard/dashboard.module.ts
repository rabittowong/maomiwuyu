import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardContentComponent } from './dashboard-content.component';
import { routes } from './dashboard.routes';
import { FormsModule } from '@angular/forms';
import { CustomPipeModule } from '../pipe/custom-pipe.module';
import { ResolveUser } from '../resolve/user.resolve';

@NgModule({
  declarations: [
    DashboardContentComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    CustomPipeModule,
  ],
  providers: [
    ResolveUser,
  ],
})
export class DashboardModule {
}
