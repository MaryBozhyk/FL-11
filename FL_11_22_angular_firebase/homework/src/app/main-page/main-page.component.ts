import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  sources: any;
  itemSelected: string;
  listItems = [];

  constructor(
    public mainService: MainService
  ) {}

  ngOnInit() {
      this.mainService.getAll().subscribe(items =>{
        items.forEach(x => this.listItems.push(x))
      })

      this.getSources();
  }

  getSources(): void {
    this.sources = this.listItems;
  }

  onChange($event): void {
    if ($event === "All sources") {
      this.sources = this.listItems;
    } else {
      this.sources = this.listItems.filter(x => x.source === $event);
    }
  }

  onClick(value: string): void {
    this.sources = this.listItems.filter(x => x.heading.includes(value));
  }
}
