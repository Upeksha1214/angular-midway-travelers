import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {SuggestPageComponent} from "./suggest-page/suggest-page.component";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {SearchPlacesComponent} from "./search-places/search-places.component";
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'suggest', component: SuggestPageComponent },
  { path: 'search', component: SearchPlacesComponent },
  { path: 'edit-profile', component: EditProfileComponent },
 

  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
