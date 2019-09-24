import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './app/signup/signup.component';
import { UserServiceService } from '../app/service/user-service.service'
import { HttpClientModule } from '@angular/common/http';
import { MainpageComponent } from './login-page/mainpage/mainpage.component' 
import { AuthGuard } from './app/auth.guard/auth.guard';
import { AuthInterceptor } from './app/auth.guard/auth.interceptor';
import { UserProfileComponent } from './login-page/user-profile/user-profile.component';
import { MyDirectiveDirective } from './my-directive.directive';

const appRoutes : Routes = [
  {
    path:'login',
    component : LoginPageComponent
  },
  {
    path:'login/signup',
    component:SignupComponent
  },
  {
    path : 'geet',
    component:MainpageComponent
  },
  {
    path : 'geet/profile',
    component:UserProfileComponent
  }
 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupComponent,
    MainpageComponent,
    UserProfileComponent,
    MyDirectiveDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserServiceService,AuthGuard,AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
