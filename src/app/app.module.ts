import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { TemplateModule } from './template/template.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { EventModule } from './event/event.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ServiceModule,
    TemplateModule,
    HomeModule,
    AboutUsModule,
    AnnouncementModule,
    EventModule,
    LoginModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
