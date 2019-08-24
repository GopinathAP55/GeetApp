import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private userService : UserServiceService,private router : Router){}
    intercept(req : HttpRequest<any>, next:HttpHandler){
        if(req.headers.get('noauth')){
            return next.handle(req.clone());
        }else{
            const clonereq = req.clone({
            headers : req.headers.set("Authorization","Bearer " +this.userService.getToken())
        });
           return next.handle(clonereq).pipe(
           );
         
      }
    }
}