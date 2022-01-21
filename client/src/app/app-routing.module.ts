import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component'
import { NewGameComponent } from './components/new-game/new-game.component'
import { GameComponent } from './components/game/game.component'
import { AuthGuard } from './guards/auth.guard'
import { ResultsComponent } from './components/results/results.component'
import { PlayerHistoryComponent } from './components/player-history/player-history.component'
import { SingleRoundRankingComponent } from './components/single-round-ranking/single-round-ranking.component'
import { OverAllRankingComponent } from './components/over-all-ranking/over-all-ranking.component'



const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'newGame',
    component: NewGameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'overallRanking',
    component: OverAllRankingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'singleRoundRanking',
    component: SingleRoundRankingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'playerHistory',
    component: PlayerHistoryComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
