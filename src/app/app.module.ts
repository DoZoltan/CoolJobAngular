import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { JobBoxComponent } from './components/job-box/job-box.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AddNewAdvComponent } from './components/add-new-adv/add-new-adv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserRegistrationComponent,
    MainPageComponent,
    UserLoginComponent,
    JobBoxComponent,
    JobCardComponent,
    FilterBarComponent,
    JobDetailsComponent,
    AddNewAdvComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
