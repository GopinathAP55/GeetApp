import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService : UserServiceService,private router : Router) { }
  userDetails;
  ngOnInit() {
    this.userService.getLoginDetails().subscribe(
      res => {
          this.userDetails = res['UserDetails'];
      },
      err => {
        console.log(err);
      }
    )
  }

}
