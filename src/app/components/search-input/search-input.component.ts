import { Component, Input, OnInit } from '@angular/core';
import { Summoner } from 'src/app/shared/entities/summoner';

import { SummonerService } from 'src/app/shared/services/summoner.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() searchParam: string = "";

  summoner? : Summoner

  constructor() {}

  ngOnInit(): void {}                  

}
