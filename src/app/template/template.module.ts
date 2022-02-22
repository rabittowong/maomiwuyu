import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TemplateFooterComponent } from './footer';
import { TemplateHeaderComponent } from './header';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TemplateFooterComponent,
    TemplateHeaderComponent,
  ],
  exports: [
    TemplateFooterComponent,
    TemplateHeaderComponent,
  ],
})
export class TemplateModule {
}
