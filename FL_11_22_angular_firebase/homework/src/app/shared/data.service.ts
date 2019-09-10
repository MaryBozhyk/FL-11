import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Items } from '../items';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postSource = new BehaviorSubject({ item: null, key: '' });
  currentPost = this.postSource.asObservable();

  constructor() { }

  changePost( item: Items, key: string){
    this.postSource.next({ item: item, key: key })
  }
}
