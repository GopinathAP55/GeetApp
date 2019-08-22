import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './app/signup/signup.component';
import { MainpageComponent } from './login-page/mainpage/mainpage.component';
import { AuthGuard } from './app/auth.guard/auth.guard';
import { UserProfileComponent } from './login-page/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'login',
    component : LoginPageComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path : 'geet',
    component:MainpageComponent,canActivate : [AuthGuard]
  },  {
    path : 'profile',
    component:UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
