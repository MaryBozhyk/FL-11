import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { MainService } from '../main.service';
import { Items } from '../items';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  item: Items;

  constructor(
    public mainService: MainService,
    private router: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    const id = +this.router.snapshot.paramMap.get('id');
    this.item = this.mainService.listItems.find(number => number.id === id)
  }

}
