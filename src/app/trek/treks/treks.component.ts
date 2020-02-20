import { Component, OnInit } from '@angular/core';
import { TrekService } from 'src/app/services/trek.service';
import Trak from 'src/app/models/traks';

@Component({
  selector: 'app-treks',
  templateUrl: './treks.component.html',
  styleUrls: ['./treks.component.scss']
})
export class TreksComponent implements OnInit {
allTreks: Array<Trak>;
name: string;
description: string;
dateTime: string;
organizer: string;
likes: string;

  constructor(private trekService: TrekService) { }

  ngOnInit(): void {
       this.trekService.getAllTreks()
    .subscribe(
      data => {
        this.allTreks = data;
        // console.log('all' + this.allTreks);
      }
      );
  }

}
