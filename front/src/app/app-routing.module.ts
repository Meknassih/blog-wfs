import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: TimelineComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
