import { Component, Input, OnInit, Output } from '@angular/core';
import { Summoner } from 'src/app/shared/entities/summoner';
import { UserInfo } from 'src/app/shared/entities/userInfo';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { SummonerService } from 'src/app/shared/services/summoner.service';

@Component({
  selector: 'app-summoner-profile',
  templateUrl: './summoner-profile.component.html',
  styleUrls: ['./summoner-profile.component.scss']
})
export class SummonerProfileComponent implements OnInit {
  @Input() selectedSummoner: Summoner;
  private uid: string;
  isFollower: any;
  displayBlock: boolean = true;

  constructor(private summonerService: SummonerService, private db: DatabaseService) { }

  async ngOnInit() {
    this.uid = JSON.parse(localStorage.getItem('user')).uid;
    this.db.getUserInfo(this.uid).then((userInfo: UserInfo)=> {
      console.log('go user data: ', userInfo)
    })
    this.checkFollow()
  }

  followUser(summonerName: string, profilePictureId: string) {
    this.db.addSummoner(this.uid, summonerName, profilePictureId)
    this.isFollower = true;
  }

  private checkFollow() {
    this.db.getUserInfo(this.uid).then((userInfo: UserInfo) => {
      if(userInfo) {
        const searchResult = userInfo.summoners.find(summonerData => {
          return summonerData.name.toLowerCase() === this.selectedSummoner.name.toLowerCase()
        })
        this.isFollower = (searchResult !== undefined)
        this.displayBlock = false
      } else {
        this.isFollower = false
        this.displayBlock = false
      }
    })
  }
}