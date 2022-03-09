import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  BASE_URL = "https://europe.api.riotgames.com"

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  // Holt die letzten 20 MatchIds des spielers
  getMatchIds(playerID: string): Observable<any> {
    const url = `${this.BASE_URL}/lol/match/v5/matches/by-puuid/${playerID}/ids`
    return this.http.get(url, {params: {api_key: config.RIOT_API_KEY}})
  }

  getMatchStats(matchID: string): Observable<any> {
    const url = `${this.BASE_URL}/lol/match/v5/matches/${matchID}`
    return this.http.get(url, {params: {api_key: config.RIOT_API_KEY}})
  }

}
