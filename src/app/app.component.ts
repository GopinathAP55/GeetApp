import { Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from './service/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GlitterApp';
//Added router and service classes into the constructor
  constructor(private router: Router, private userService: UserServiceService) { }

  loginSuccess: string = "false";
//This method called when the compnent creation to subscribe data feom another component.
  ngOnInit() {
    this.userService.loginSuccessOrNot.subscribe((data) => {
      this.loginSuccess = data;
    })
  }
  //Added a router to navigate to main page.
  logout() {
    this.loginSuccess = "false";
    this.router.navigate(['/']);
  }
}

