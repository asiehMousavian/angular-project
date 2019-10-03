import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {LoggedinService} from '../logged-in.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  LoginForm:FormGroup;
  ngOnInit() {
    this.LoginForm =  new FormGroup ({
      'mobile' : new FormControl(null, [Validators.required,Validators.minLength(11)]),
      'password' : new FormControl(null, Validators.required)
    });
  }
  constructor(private router: Router,private loggedInService: LoggedinService){
  }
  public submit () {
    // console.log('hello');
    if (this.LoginForm.valid) {
      this.loggedInService.sendToken(this.LoginForm.value.mobile)
      this.router.navigate(["home"]);
    }
  }

}