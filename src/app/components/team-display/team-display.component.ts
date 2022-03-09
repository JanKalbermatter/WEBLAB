import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-display',
  templateUrl: './team-display.component.html',
  styleUrls: ['./team-display.component.scss']
})
export class TeamDisplayComponent implements OnInit {
  @Input() team;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToSummoner(summoner:string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }

    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/summoner', summoner]);
  }

}
