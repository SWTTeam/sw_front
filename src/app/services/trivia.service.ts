import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { LoginComponent } from '../components/login/login.component';
import { Score } from '../models/score';
import { Useralt } from '../models/useralt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  //private ServerUrl: string = 'http://54.67.67.7:8085/StarWarsTrivia/';
  private ServerUrl: string = 'http://localhost:8080/StarWarsTrivia/';
  private SwapiUrl: string = 'https://swapi.dev/api/';
  public visible: boolean;

  constructor(private http: HttpClient, public loginComponent: LoginComponent, public cookieService : CookieService) { }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomQuestion(randomNumber: number): Observable<Question> {
    return this.http.get(this.ServerUrl + 'trivia/' + randomNumber) as Observable<Question>;

  }

  getRandomStarWarsData(randomNumber: number): Observable<any> {

    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5 || randomNumber === 6 || randomNumber === 7) {
      let randomPerson:number = this.getRandomInt(82) + 1;
      return this.http.get(this.SwapiUrl + 'people/' + randomPerson);
    } else if (randomNumber === 8 || randomNumber === 9 || randomNumber === 10 || randomNumber === 11 || randomNumber === 12 || randomNumber === 13 || randomNumber === 14) {
      let randomPlanet:number = this.getRandomInt(60) + 1;
      return this.http.get(this.SwapiUrl + 'planets/' + randomPlanet);
    } else if (randomNumber === 18 || randomNumber === 19 || randomNumber === 20 || randomNumber === 21 || randomNumber === 22 || randomNumber === 23) {
      let randomStarship:number = this.getRandomInt(36) + 1;

      if (randomStarship != 1 && randomStarship != 4 && randomStarship != 6 && randomStarship != 7 && randomStarship != 8 && randomStarship != 14 && randomStarship != 16 && randomStarship != 18 && randomStarship != 19 && randomStarship != 20 && randomStarship != 24 && randomStarship != 25 && randomStarship != 26 && randomStarship != 30 && randomStarship != 33 && randomStarship != 34 && randomStarship != 35 && randomStarship != 36) {
        return this.http.get(this.SwapiUrl + 'starships/' + randomStarship);
      } else {
        randomStarship = 15;
        return this.http.get(this.SwapiUrl + 'starships/' + randomStarship);
      }
      
    } else if (randomNumber === 15 || randomNumber === 16 || randomNumber === 17) {
      let randomFilm:number = this.getRandomInt(6) + 1;
      return this.http.get(this.SwapiUrl + 'films/' + randomFilm);
    } else {
      return null;
    }

  }

  enterScore(scoreNumber: number) {

    let score: Score = new Score(scoreNumber, new Date, new Useralt(<number><unknown>this.cookieService.get('userId'), null, null));

    this.http.post(this.ServerUrl + 'score', JSON.stringify(score));
  }

}
