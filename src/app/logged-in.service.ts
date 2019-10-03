import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

// import { delay, tap } from 'rxjs/operators';

@Injectable()
export class LoggedinService {
  constructor(private router: Router) { }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    console.log(this.isLoggednIn)
    this.router.navigate(['']);
  }
}