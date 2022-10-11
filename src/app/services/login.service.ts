import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //get current user
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData)
  }

  //login user:set token in localstorage
  public loginUser(token:any){
    localStorage.setItem('token',token)
    return true;
  }
  //user is logged or not
  public isLoggedin(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined||tokenStr==''||tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  //remove token from logout
  public logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return true;
  }
  //getToken
  public getToken(){
    return localStorage.getItem('token');
  }
  //setUser
  public setUser(user:any){
localStorage.setItem('user',JSON.stringify(user));
  }
  //getuser
  public getUser(){
    let userStr=localStorage.getItem('user')
    if(userStr!=null){
      return JSON.parse(userStr)
    }else{
      this.logout();
      return null;
    }
  }
  //get userrole
  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }
}
