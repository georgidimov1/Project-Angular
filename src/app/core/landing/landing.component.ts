import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
name = 'name';
imageURL = 'imageURL';
isAuth = 0;
isArray = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
