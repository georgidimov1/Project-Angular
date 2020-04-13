import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent {
  constructor(private userService: UserService) { }
  username = sessionStorage.username;
  isAuth = sessionStorage.getItem('authtoken');
     async handleClick() {
      console.log("yes")
      try {
        await this.userService.logout();
        sessionStorage.clear();
        location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }
 
