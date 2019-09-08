import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MainService } from '../main.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  addForm = this.fb.group({
    heading: ['', Validators.required],
    shortDescription: ['', Validators.required],
    content: ['', Validators.required],
    date: ['', [Validators.required, Validators.maxLength(10)]],
    author: ['', Validators.required],
    source: ['', Validators.required],
  });

  constructor(
    public mainService: MainService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  addNews(){
    this.mainService.listItems.push({
      id: this.mainService.listItems.length + 1,
      image: '../../assets/img/addPost.png',
      heading: this.addForm.value.heading,
      shortDescription: this.addForm.value.shortDescription,
      content: this.addForm.value.content, 
      date: this.addForm.value.date,
      author: this.addForm.value.author,
      source: this.addForm.value.source,
    })
    alert('Saved!')
    this.addForm.reset();
  }
}
