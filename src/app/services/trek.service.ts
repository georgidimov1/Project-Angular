import { Injectable } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})
export class TrekService {
  collection: any;
  constructor(datastoreService: DataStoreService) {
    this.collection = datastoreService.collection('TREKKING');
  }
  async save(entity: any) {
    try {
      const savedEntity = await this.collection.save(entity);
      console.log(savedEntity);
    } catch (error) {
      console.log(error);
    }
  }
}
