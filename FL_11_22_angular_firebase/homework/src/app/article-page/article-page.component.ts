import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from '../shared/main.service';
import { Items } from '../items';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  listItems: any;
  item: Items;

  constructor(
    public mainService: MainService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listItems = this.mainService.getAll();
    this.getItem();
  }

  getItem() {
    const id = +this.router.snapshot.paramMap.get('id');
    this.item = this.listItems.find(number => number.id === id)
  }

}
