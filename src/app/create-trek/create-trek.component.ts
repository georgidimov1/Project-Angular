import { Component, OnInit } from '@angular/core';
import { TrekService } from '../services/trek.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-trek',
  templateUrl: './create-trek.component.html',
  styleUrls: ['./create-trek.component.scss']
})
export class CreateTrekComponent {
constructor(private trekService: TrekService, private router: Router){}
  createHandler(data){
    let entity = {
      name: [data.location, data.dateTime, data.description, data.imageURL],
      likes: Number(0),
      organizer: sessionStorage.username
    }
    this.trekService.save(entity)
    this.router.navigateByUrl('');
    }
  }
