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

const appRoutes : Routes = [
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
    component:MainpageComponent
  },
 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupComponent,
    MainpageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
