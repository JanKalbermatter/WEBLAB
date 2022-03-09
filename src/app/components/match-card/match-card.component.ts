import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/shared/entities/match';
import { PlayerStats } from 'src/app/shared/entities/playerStats';
import { TeamMemeber, Teams } from 'src/app/shared/entities/team';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent implements OnInit {
  @Input() match: Match
  @Input() puuid: Match
  private activePlayer: any;
  playerStats: PlayerStats
  teams: Teams; 

  constructor() { }

  ngOnInit() {
    this.activePlayer = this.getActivePlayerData(this.match.info.participants);
    this.playerStats = this.generateStats(this.activePlayer)
    this.teams = this.generateTeams(this.match)
  }

  private getActivePlayerData(participants: any[]): any {
    return participants.filter(value => {
      return value.puuid === this.puuid; 
    })[0]
  }

  private generateStats(player: any) : PlayerStats {
    let items = []
    for(let i = 0; i <= 5; i++) {
      items.push(player[`item${i}`])
    }

    const trinket = player['item6'];

    const possiblePills = {"pentaKills": "Pentakill", "quadraKills": "Quadrakill", "tripleKills": "Triplekill", "doubleKills": "Doublekill"}
    let pills = []
    Object.keys(player).forEach((key) => {
      if(possiblePills[key] && player[key] > 0) {
        pills.push(possiblePills[key])
      }
    })

    const stats = {
      kills: player.kills,
      assists:  player.assists,
      deaths:  player.deaths,
      kda:  player.challenges.kda,
      killingSprees:  player.killingSprees,
      pentaKills:  player.pentaKills,
      quadraKills:  player.quadraKills,
      tripleKills:  player.tripleKills,
      doubleKills:  player.doubleKills
    }
    
    return {
      puuid: player.puuid,
      position: player.individualPosition,
      profileIcon: player.profileIcon,
      level: player.championLevel,
      championId: player.championId,
      championName: player.championName,
      stats: stats,
      items: items,
      trinket: trinket,
      totalMinionsKilled: player.totalMinionsKilled,
      pills: pills
    }
  }

  private generateTeams(matchData: Match): Teams {
    let team100: any = matchData.info.participants.filter((value: any) => {
      return value.teamId === 100
    })

    team100.map(mapTeamMember)

    
    let team200: any = matchData.info.participants.filter((value: any) => {
      return value.teamId === 200
    })

    team200.map(mapTeamMember)

    return {
      team100: team100,
      team200: team200
    }
  }
}

function mapTeamMember(value: any) {
  return {
    "playerName": value.playerName,
    "championName": value.championName,
    "championId": value.championId
  }
}
