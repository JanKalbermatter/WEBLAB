import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {
  BASE_URL = "https://euw1.api.riotgames.com"
  constructor(private http: HttpClient, private router: Router) { }

  getSummoner(summoner: string): Observable<any> {
    const url = `${this.BASE_URL}/lol/summoner/v4/summoners/by-name/${summoner}`
    return this.http.get(url, {params: {api_key: config.RIOT_API_KEY}})
  }

  getSummonerRankedStats(summonerID: string) {
    const url = `${this.BASE_URL}/lol/league/v4/entries/by-summoner/${summonerID}`
    return this.http.get(url, {params: {api_key: config.RIOT_API_KEY}})
  }
 
}
