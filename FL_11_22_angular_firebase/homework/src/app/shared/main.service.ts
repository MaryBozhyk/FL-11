import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Items } from '../items';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private db: AngularFireDatabase
  ) {
  }

  insert ( item: Items ) {
    this.db.list('listItems').push(item)
    .then((result: any) => {
      console.log(result.key);
    })
  }

  getAll(){
    return this.db.list('listItems')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  getItem(key: string){
    return this.db.list('listItems/' + key)
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => (c.payload.key, c.payload.val()));
      })
    );
  }
  
}
