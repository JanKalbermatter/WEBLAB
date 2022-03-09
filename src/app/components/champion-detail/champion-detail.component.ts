import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit {
  @Input() stats
  @Input() role:string
  filteredStats;
  
  constructor() { }

  ngOnInit() {
    this.filteredStats = this.filterStats(this.stats)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredStats = this.filterStats(this.stats)
  }

  private filterStats(stats: any): any {
    return stats.filter(value => {
      return value.role === this.role
    })
  }


}
