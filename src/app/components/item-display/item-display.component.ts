import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {
  @Input() items: number[];
  @Input() trinket: number;
  
  constructor() { }

  ngOnInit() {
  }

}
