import { Component, OnInit } from '@angular/core';

import { MainService } from '../main.service';
import { Items } from '../items';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  sources: Array<Items>;
  itemSelected: string;

  constructor(public mainService: MainService) { }

  ngOnInit() {
    this.getSources();
  }

  getSources(): void {
    this.sources = this.mainService.listItems;
  }

  onChange($event): void {
    if ($event === "All sources") {
      this.sources = this.mainService.listItems;
    } else {
      this.sources = this.mainService.listItems.filter(x => x.source === $event);
    }
  }

  onClick(value: string): void {
    this.sources = this.mainService.listItems.filter(x => x.heading.includes(value))
  }

}
