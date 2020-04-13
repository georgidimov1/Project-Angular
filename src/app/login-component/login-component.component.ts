import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  constructor(private loginService: LoginService) { }
  user: any;
  pass: any;
  ngOnInit(): void {
  }
  loginHandler(data) {
    this.user = data.username;
    this.pass = data.password;
    this.loginService.login(this.user, this.pass);
    
     }
}


