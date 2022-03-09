import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/config';
import { CacheService } from '../cache/cacheService';

@Injectable({
  providedIn: 'root'
})
export class TopPlayerService {
  BASE_URL = "https://euw1.api.riotgames.com"
  constructor(private http: HttpClient) { }

  getRankedChallengers(): Observable<any> {
    const url = `${this.BASE_URL}/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`
    return this.http.get(url, {params: {api_key: config.RIOT_API_KEY}})
  }

  getFlexChallengers(): Observable<any>  {
    const url = `${this.BASE_URL}/lol/league/v4/challengerleagues/by-queue/RANKED_FLEX_SR`
    return this.http.get(url, {params: {api_key: config.RIOT_API_KEY}})
  }
}
