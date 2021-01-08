import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';//needed to import manually for HttpClientModule
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { RewardComponent } from './components/reward/reward.component';//needed to import manually for HttpClientModule
import { TriviaComponent } from './components/trivia/trivia.component';
import { CommonModule } from '@angular/common';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    BannerComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    RewardComponent,
    TriviaComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
