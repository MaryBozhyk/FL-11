import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  listItems: any;
  item: any;
  id: string;

  constructor(
    public mainService: MainService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.mainService.getAll().subscribe(items =>{
      items.forEach(x => this.listItems.push(x))
    })
    this.getItem();
  }

  getItem() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.mainService.getItem(this.id).subscribe(x => {
      this.item = x});
  }

}
