import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/shared/entities/champion';
import { ROLES } from 'src/app/shared/entities/roles';
import { ChampionService } from 'src/app/shared/services/champion.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  private champions: Champion;
  totalGames: number;
  championStats: any;
  selectedRole: string = 'MID'

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    console.log("init: ", this.selectedRole)
    this.championService.getChampions().subscribe((champions => {
      this.champions = champions.data
      console.log("Champs: ", this.champions)

      this.championService.getChampionStats().subscribe((championStats => {
        this.totalGames = championStats.data[0].total_game_count
        this.championStats = championStats.data.map((value, index) => {
          let name = ""
          Object.keys(this.champions).forEach(key => {
            if(this.champions[key].key == value.champion_id) {
              name = this.champions[key].name
            }
          })
          return {
                championName: name,
                role: value.role,
                games: value.stats.games,
                bans: value.stats.bans.ban_count,
                wins: value.stats.wins,
                kills: value.stats.kills,
                deaths: value.stats.deaths,
                winrate: (value.stats.wins/value.stats.games)*100,
                pickrate: (value.stats.games/this.totalGames)*100
          }
        })

        this.championStats = this.championStats.sort((a, b) => {
          return (b.winrate - a.winrate)
        })
      }))
    }))
  }

  updateRole(role: string) {
    this.selectedRole = role
  }

}
