import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userId : number;
  public username : string;


  constructor(private http :  HttpClient) { }

  sendCredentials(user : User) : Observable<UserInfo>{
    let body : User = user;
    return this.http.post<UserInfo>("http://54.67.67.7:8085/StarWarsTrivia/login", body);
  }

}