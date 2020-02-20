import { Injectable } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private userService: UserService, private location: Location) { }
  pageRefresh() {
    location.replace('');
    }
  async signup(data: any) {
    try {
      const user = await this.userService.signup(data);
      sessionStorage.setItem('authtoken', user._kmd.authtoken);
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('userId', user._id);
      this.pageRefresh();
    } catch (error) {
      console.log(error);
    }
  }
}
