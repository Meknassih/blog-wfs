import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [
  {path: '', component: TimelineComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'article/:id', component: ArticleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
