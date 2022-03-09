import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { QUEUE_TYPE } from 'src/app/shared/entities/queueTypes';
import { Ranked } from 'src/app/shared/entities/ranked';
import { Summoner } from 'src/app/shared/entities/summoner';
import { SummonerService } from 'src/app/shared/services/summoner.service';

@Component({
  selector: 'app-ranked-detail',
  templateUrl: './ranked-detail.component.html',
  styleUrls: ['./ranked-detail.component.scss']
})
export class RankedDetailComponent implements OnInit {
  @Input() selectedSummoner: Summoner;
  @Input() queueType: QUEUE_TYPE;
  @Input() rankedStats: Ranked;
  queue: string

  constructor(private summonerService: SummonerService) { }

  ngOnInit() {}

  getQueueText(): string {
    let queue = ''
    switch(this.rankedStats.type) {
      case QUEUE_TYPE.SOLO: {
        queue = 'Ranked Solo/Duo'
        break
      }
      case QUEUE_TYPE.FLEX: {
        queue = 'Ranked Flex'
        break
      }
    }
    return queue
  }
}
