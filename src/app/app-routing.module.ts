import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewAdvComponent } from './components/add-new-adv/add-new-adv.component';
import { JobBoxComponent } from './components/job-box/job-box.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'add', component: AddNewAdvComponent },
  { path: 'favorites', component: JobBoxComponent },
  { path: 'jobs', component: JobBoxComponent },
];

// Route not needed
// - NavBarComponent: everywhere
// - FilterBarComponent: at JobBoxComponent (at /favorites and /jobs)
// - JobCardComponent: inside the JobBoxComponent

// Routes with same Components - inside it (them) will be the jobCards (favs or jobs, depending on the route)
// - /favorites and /jobs --> JobBoxComponent

// Have to learn how to use dynamic routes
// - /favorites/id and /jobs/id --> JobDetailsComponent

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
