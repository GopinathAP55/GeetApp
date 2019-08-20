import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService : UserServiceService,private router : Router) { }
  errormessage : any = "";
  ngOnInit() {
  }

  username : string ='';
  password : string ='';
  phoneNumber : string = '';
  email : string = ''; 

  success : boolean = false;

  onSignUp(form : NgForm){
    this.username = form.value.username;
    this.password = form.value.password;
    this.phoneNumber = form.value.phoneNumber;
    this.email = form.value.email;


    this.userService.selectedUser.email = this.email;
    this.userService.selectedUser.username = this.username;
    this.userService.selectedUser.phoneNumber = this.phoneNumber;
    this.userService.selectedUser.password = this.password;
    if(this.email != '' && this.password && this.phoneNumber && this.username){
      //Called the service method to post the user details from the sign upform.
    this.userService.postUserdetails(form.value).subscribe(
      req=>{
        this.success=true;
        this.errormessage= "Make a way for new "+form.value.username;
        this.router.navigate(['login']);
        
      },
      err=>{
        this.errormessage = err.error.message;
        console.log('not saved')
      });
    }
  }
}
