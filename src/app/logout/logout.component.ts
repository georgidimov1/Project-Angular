import { Component } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private userService: UserService) {}
  async logout() {
    try {
      await this.userService.logout();
      console.log(111);
    } catch (error) {
      console.log(error);
    }
  }
}
