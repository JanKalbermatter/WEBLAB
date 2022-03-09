import { Component, OnInit } from '@angular/core';
import { TopPlayerService } from 'src/app/shared/services/top-player.service';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.scss']
})
export class TopPlayersComponent implements OnInit {
  challengers: any[]
  LOCALE_STORAGE_KEY = `challengers_toplist`

  constructor(private topPlayerService: TopPlayerService) { }

  ngOnInit() {

    this.topPlayerService.getRankedChallengers().subscribe((challengers) => {
      this.challengers = challengers.entries.sort((a, b) => {
        return (b.leaguePoints - a.leaguePoints)
      })
      
      console.log(this.challengers)
    })
  }

}
