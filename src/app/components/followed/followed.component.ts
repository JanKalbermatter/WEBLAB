import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/shared/entities/userInfo';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.scss']
})
export class FollowedComponent implements OnInit {
  subscriptions: UserInfo;
  private uid: string;
  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.uid = JSON.parse(localStorage.getItem('user')).uid;
    this.getFollows()
  }

  getFollows() {
    this.db.getUserInfo(this.uid).then((userInfo: UserInfo) => {
      this.subscriptions = userInfo;
      console.log(this.subscriptions)
    })
  }

  unfollow(summoner: string) {
    this.db.removeSummoner(this.uid, summoner)
    this.subscriptions.summoners = this.subscriptions.summoners.filter(summonerData => {
      return summonerData.name.toLowerCase() !== summoner.toLowerCase()
    })
  }

}
