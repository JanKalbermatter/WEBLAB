import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummonerComponent } from './components/summoner/summoner.component';
import { SearchComponent } from './components/search/search.component';
import { TopPlayersComponent } from './components/top-players/top-players.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { FollowedComponent } from './components/followed/followed.component';


import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'summoner/:summoner', component: SummonerComponent, canActivate: [AuthGuard] },
  { path: 'topPlayers', component: TopPlayersComponent, canActivate: [AuthGuard] },
  { path: 'followed', component: FollowedComponent, canActivate: [AuthGuard] },
  { path: 'champions', component: ChampionsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }