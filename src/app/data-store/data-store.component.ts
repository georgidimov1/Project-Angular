import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-data-store',
  templateUrl: './data-store.component.html',
  styleUrls: ['./data-store.component.scss']
})
export class DataStoreComponent implements OnInit {
  collection: any;
  constructor(datastoreService: DataStoreService) {
    this.collection = datastoreService.collection('TREKKING');
  }

  ngOnInit(): void {
  }

}
