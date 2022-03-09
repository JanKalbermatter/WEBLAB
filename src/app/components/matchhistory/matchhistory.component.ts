import { Component, Input, OnInit } from '@angular/core';
import { CacheService } from 'src/app/shared/cache/cacheService';
import { Match } from 'src/app/shared/entities/match';
import { MatchService } from 'src/app/shared/services/match.service';

@Component({
  selector: 'app-matchhistory',
  templateUrl: './matchhistory.component.html',
  styleUrls: ['./matchhistory.component.scss']
})
export class MatchhistoryComponent implements OnInit {
  @Input() puuid: string;
  matches: Match[] = new Array()
  private TOTAL_MATCHES = 5
  private LOCALE_STORAGE_KEY;
  private cacheService;
  

  constructor(
    private matchService: MatchService,
  ) {}

  ngOnInit() {
    this.LOCALE_STORAGE_KEY = `${this.puuid}_Matches`
    this.cacheService = new CacheService<Match>(this.LOCALE_STORAGE_KEY)
    this.getMatches(this.TOTAL_MATCHES)
  }

  private getMatches(amount) {
    this.matchService.getMatchIds(this.puuid)
      .subscribe(matchIds => {
        for(let i = 0; i < amount; i++) {
          const currentId = matchIds[i]
          const storageMatch: Match[] = this.cacheService.get()

          if(storageMatch && storageMatch.length > 0) {
            console.log( 'getting from localStorage' );
            this.matches = storageMatch

            this.matches = [...this.matches].sort((a, b) => {
              return (b.info.gameCreation - a.info.gameCreation)
            })
          } else {
            console.log( 'Getting via request' );
            this.matchService.getMatchStats(currentId)
              .subscribe((matchStats: Match) => {
                this.cacheService.put(matchStats)
                this.matches.push(matchStats)

                this.matches = [...this.matches].sort((a, b) => {
                  return (b.info.gameCreation - a.info.gameCreation)
                })
            })
          }
        }
    })
  }

  updateMatchData() {
    this.matches = new Array()
    this.cacheService.clear()
    this.getMatches(this.TOTAL_MATCHES)
  }
}


