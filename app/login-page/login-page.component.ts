import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
//Added router and service classes into the constructor
  constructor(private Userservice : UserServiceService,private router : Router) { }

  ngOnInit() {
   
  }
  loginSuccessfrom : string = "";

  email : string = '';
  password : string ='';


  onLogin(form : NgForm){
   this.email=form.value.email;
   this.password = form.value.password;
   if(this.email != '' && this.password!=''){
     //By using the service method passes the form value to insert using observable.
    this.Userservice.getLoginDetails(form.value).subscribe(
      req=>{
        this.loginSuccessfrom = "true";     
        //An eventEmitter to pass the value from this component to another component
        this.Userservice.onLoginEmitData(this.loginSuccessfrom);
        this.router.navigate(['/']);
      },
      err=>{
        console.log(err);
        this.loginSuccessfrom = "false"; 
        this.Userservice.onLoginEmitData(this.loginSuccessfrom);
      });
    }
  }
}
