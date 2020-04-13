import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
name = 'name';
isAuth = sessionStorage.getItem('authtoken');
isArray: any;
data;
collection: any;
entities: any;
  constructor(private router: Router, datastoreService: DataStoreService) {
    this.collection = datastoreService.collection('TREKKING');
  }
  ngOnInit(): void {
    this.collection.find()
    .subscribe((entities) => {
     this.entities = entities;
     this.isArray=this.entities
    }, (error) => {
      console.log(error)
    }, () => {
      // ...
    });
    }
    }
