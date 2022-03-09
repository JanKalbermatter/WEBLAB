import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  BASE_URL = "https://euw1.api.riotgames.com"
  constructor(private http: HttpClient, private router: Router) { }

  getChampions(): Observable<any> {
    const url = `https://blitz-cdn-plain.blitz.gg/blitz/ddragon/12.3.1/data/en_US/champions.json`
    return this.http.get(url)
  }

  getChampionStats(): Observable<any> {
    const url = `https://league-champion-aggregate.iesdev.com/api/champions?region=world&tier=PLATINUM_PLUS&queue=420`
    return this.http.get(url)
  }
}
