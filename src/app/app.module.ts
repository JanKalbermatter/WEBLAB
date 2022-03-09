import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SummonerComponent } from './components/summoner/summoner.component';
import { SearchComponent } from './components/search/search.component';
import { SummonerProfileComponent } from './components/summoner-profile/summoner-profile.component';
import { MatchhistoryComponent } from './components/matchhistory/matchhistory.component';
import { RankedDetailComponent } from './components/ranked-detail/ranked-detail.component';
import { MatchCardComponent } from './components/match-card/match-card.component';
import { ItemDisplayComponent } from './components/item-display/item-display.component';
import { TeamDisplayComponent } from './components/team-display/team-display.component';
import { TopPlayersComponent } from './components/top-players/top-players.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { ChampionNamePipe } from './shared/pipes/champion-name.pipe';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FollowedComponent } from './components/followed/followed.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SummonerComponent,
    SearchComponent,
    SummonerProfileComponent,
    MatchhistoryComponent,
    RankedDetailComponent,
    MatchCardComponent,
    ItemDisplayComponent,
    TeamDisplayComponent,
    TopPlayersComponent,
    ChampionsComponent,
    ChampionDetailComponent,
    ChampionNamePipe,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NavigationComponent,
    FollowedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
