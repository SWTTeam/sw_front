import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { RewardComponent } from './components/reward/reward.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

const routes: Routes = [

  // {
  //   path : "login",
  //   component : LoginComponent
  // },

  {
    path : "",
    component : LoginComponent
  },

  {
    path : 'home',
    component : HomeComponent
  },

  {
    path : 'register',
    component : RegisterComponent
  },

  {
    path: 'trivia',
    component : TriviaComponent
  },
  
  {
    path: 'leaderboard',
    component : ScoreboardComponent
  },
  
  {
    path: 'profile',
    component : ProfileComponent
  },
  
  {
    path: 'reward',
    component : RewardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
