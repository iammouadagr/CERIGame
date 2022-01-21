import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard'



import { FlashMessagesModule } from 'angular2-flash-messages';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewGameComponent } from './components/new-game/new-game.component'
import { ThemeButtonComponent } from './components/theme-button/theme-button.component';
import { DifficultyButtonComponent } from './components/difficulty-button/difficulty-button.component';
import { GameComponent } from './components/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './components/question/question.component';
import { AnswerButtonComponent } from './components/answer-button/answer-button.component';

import { CountdownModule } from 'ngx-countdown';
import { ResultsComponent } from './components/results/results.component';
import { SuccessButtonComponent } from './components/success-button/success-button.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { OverAllRankingComponent } from './components/over-all-ranking/over-all-ranking.component';
import { SingleRoundRankingComponent } from './components/single-round-ranking/single-round-ranking.component';
import { PlayerHistoryComponent } from './components/player-history/player-history.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { SinglePlayerHistoryRowComponent } from './components/single-player-history-row/single-player-history-row.component';
import { SingleRoundRankingRowComponent } from './components/single-round-ranking-row/single-round-ranking-row.component';
import { OverallRankingRowComponent } from './components/overall-ranking-row/overall-ranking-row.component';
import { SigninButtonComponent } from './components/signin-button/signin-button.component';
import { PageButtonComponent } from './components/page-button/page-button.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent,
    ProfileComponent,
    NewGameComponent,
    ThemeButtonComponent,
    DifficultyButtonComponent,
    GameComponent,
    QuestionComponent,
    AnswerButtonComponent,
    ResultsComponent,
    SuccessButtonComponent,
    SubmitButtonComponent,
    OverAllRankingComponent,
    SingleRoundRankingComponent,
    PlayerHistoryComponent,
    BottomNavbarComponent,
    SinglePlayerHistoryRowComponent,
    SingleRoundRankingRowComponent,
    OverallRankingRowComponent,
    SigninButtonComponent,
    PageButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    CountdownModule


  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
