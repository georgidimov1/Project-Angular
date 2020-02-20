import { Injectable } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  collection: any;
  constructor(datastoreService: DataStoreService) {
    this.collection = datastoreService.collection('treks');
  }
  find() {
    this.collection.find()
      .subscribe((entities) => {
        console.log(entities);
      }, (error) => {
        // ...
      }, () => {
        // ...
      });
  }
}
