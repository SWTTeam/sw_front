import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginService } from './login.service';
import { Showcase } from '../models/showcase';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public userId : number = this.login.userId;
  private SwapAPI : string = "https://swapi.dev/api/";

  constructor(private http :  HttpClient, public login : LoginService) { }

  updateProfile(user : User) : Observable<any>{
    return this.http.put<any>("http://localhost:8069/StarWarsTrivia/login/update", user);
  }

  getShowcase(userId) : Observable<Showcase>{
    return this.http.get<Showcase>("http://localhost:8069/StarWarsTrivia/showcase" + userId);
  }

  getCharacter(personId : number) : Observable<Person>{
    return this.http.get(this.SwapAPI + "people/" + personId ) as Observable<Person>;
  }

}
// getRewardCharacter(): Observable<Person> {
//   this.randomNumber = this.getRandomInt(82 + 1);
//   return this.http.get(this.SwapiUrl + 'people/' + this.randomNumber) as Observable<Person>;
// }
