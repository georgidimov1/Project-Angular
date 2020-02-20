import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  constructor() { }
  username = sessionStorage.username;
  isAuth = sessionStorage.getItem('authtoken');
  ngOnInit(): void {
  }
}
