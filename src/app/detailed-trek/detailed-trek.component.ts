import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { DataStoreService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-detailed-trek',
  templateUrl: './detailed-trek.component.html',
  styleUrls: ['./detailed-trek.component.scss']
})
export class DetailedTrekComponent implements OnInit {
  collection: any;
  entity: any;
  constructor(private router: Router, datastoreService: DataStoreService, private route: ActivatedRoute) { 
    this.collection = datastoreService.collection('TREKKING');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.collection.findById(params.get('productId'))
        .subscribe((entity) => {
          this.entity = entity;
        }, (error) => {
          // ...
        }, () => {
          // ...
        });
      }
    )
    
  }

}
