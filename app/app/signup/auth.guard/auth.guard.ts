import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(private userService : UserServiceService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(!this.userService.isLoggedIn()){
        this.router.navigateByUrl('/login');
        this.userService.deleteToken();
        return false;
      }
    return true;
  }
  
}
