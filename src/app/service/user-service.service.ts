import { Injectable } from '@angular/core';
import { userDetails } from './usermodel';

import { environment } from '../../environments/environment'
import { EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getToken } from '@angular/router/src/utils/preactivation';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  loginSuccessOrNot   = new EventEmitter();
  
  selectedUser : userDetails = {
    username : '',
    email:'',
    phoneNumber:'',
    password:''
};

  noAuthHeader = {headers : new HttpHeaders({'NoAuth':'True'})};
  
  constructor(private http : HttpClient) { }
  //Posting the user details via service method
  postUserdetails(user : userDetails){
    const apiURL = environment.apiBaseUrl+'/register';
    return this.http.post(apiURL,user,this.noAuthHeader)
  }
//
  authentication(user : userDetails){
    const apiURL = environment.apiBaseUrl+'/authenticate';
    return this.http.post(apiURL,user,this.noAuthHeader);
  }

  getLoginDetails(){
    const apiURL = environment.apiBaseUrl+'/login';
    return this.http.get(apiURL);
  }
  postGeet(user : userDetails){
    console.log('service post geet')
    const apiURL = environment.apiBaseUrl+'/geet';
    return this.http.post(apiURL,user);
  }
  getAllGeet(){
    console.log('service allgeet')
    const apiURL = environment.apiBaseUrl+'/allGeet';
    return this.http.get(apiURL);
  }

  onLoginEmitData(login : string){
    this.loginSuccessOrNot.emit(login);
  }

  setToken(token:string){
    localStorage.setItem('token',token);
  }
  
  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayLoad(){
    var token = localStorage.getItem('token');
    if(token){
      var userPayLoad = atob(token.split('.')[1]);
      return JSON.parse(userPayLoad);
    }else{
      return null;
    }
  }

  isLoggedIn(){
    var userPayLoad = this.getUserPayLoad();
    if(userPayLoad){
      return true;
    }else{
      return false;
    }

  }

  getToken(){
    return  localStorage.getItem('token');
  }

 
  
}

