import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: any;
  pass: any;
  rePass: any;
  constructor(private registerService: RegisterService, private router: Router) { }
  ngOnInit(): void { }
  registerHandler(data) {
    this.user = data.username;
    this.pass = data.password;
    this.rePass = data.rePassword;
    if (this.pass === this.rePass) {
      this.registerService.signup({
        username: this.user,
        password: this.pass
      });
      this.router.navigateByUrl('');
    }
    }

}
