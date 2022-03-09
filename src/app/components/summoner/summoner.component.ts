import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QUEUE_TYPE } from 'src/app/shared/entities/queueTypes';
import { Ranked } from 'src/app/shared/entities/ranked';
import { Summoner } from 'src/app/shared/entities/summoner';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { SummonerService } from 'src/app/shared/services/summoner.service';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit {
  summonerName: string;
  summoner: Summoner;
  rankedStats: Ranked[] = new Array();
  solo: QUEUE_TYPE = QUEUE_TYPE.SOLO
  flex: QUEUE_TYPE = QUEUE_TYPE.FLEX

  constructor(
    private route: ActivatedRoute,
    private summonerService: SummonerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.summonerName = this.route.snapshot.paramMap.get('summoner')
    this.summonerService.getSummoner(this.summonerName)
      .subscribe((summoner) => {
        if(summoner) {
          this.summoner = summoner
          this.getRankedStats()
        } 
      }, 
      (error) => {
        console.error('error', error)
        this.router.navigateByUrl('/error')
      }
    )
  }

  private getRankedStats() {
    this.summonerService.getSummonerRankedStats(this.summoner.id)
    .subscribe((matchData: []) => {
      matchData.forEach((queue: any) => {
        this.parseStats(queue)
      })
    }, 
    (error) => {
      console.error('error', error)
    })
  }

  private parseStats(queue) {
    this.rankedStats[queue.queueType] = {
      type: queue.queueType,
      tier: queue.tier,
      rank: queue.rank,
      lp: queue.leaguePoints,
      wins: queue.wins,
      losses: queue.losses,
      hotStreak: queue.hotStreak,
      veteran: queue.veteran
    }
  }

}
