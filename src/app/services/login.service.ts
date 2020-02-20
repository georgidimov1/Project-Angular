import { Injectable } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static isAuth;
  constructor(private userService: UserService, private location: Location) {}
  pageRefresh() {
    location.replace('');
    }
  async login(username: string, password: string) {
    try {
      const data = await this.userService.login(username, password);
      sessionStorage.setItem('authtoken', data._kmd.authtoken);
      sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('userId', data._id);
      this.pageRefresh();
                 } catch (error) {
     return error;
    }
  }
 }

