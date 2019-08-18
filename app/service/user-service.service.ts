import { Injectable } from '@angular/core';
import { userDetails } from './usermodel';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  loginSuccessOrNot   = new EventEmitter();
  loginSucess : string = "";
  
  selectedUser : userDetails = {
    username : '',
    email:'',
    phoneNumber:'',
    password:''
};
  
  constructor(private http : HttpClient) { }
  postUserdetails(user : userDetails){
    const apiURL = environment.apiBaseUrl+'/register';
    return this.http.post(apiURL,userDetails)
  }

  getLoginDetails(user : userDetails){
    const apiURL = environment.apiBaseUrl+'/login';
    return this.http.get(apiURL);

  }

  onLoginEmitData(login : string){
    this.loginSucess="true";
    this.loginSuccessOrNot.emit(this.loginSucess);
  }
  
}
