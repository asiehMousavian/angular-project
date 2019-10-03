import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedinService } from './logged-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn: boolean;

  constructor(
    public loggedInService: LoggedinService,
    public router: Router
  ) {
  }

  ngOnInit() { }

  // logIn(): void {
  //   this.loggedInService.login()
  //     .subscribe((isLoggedIn) => {
  //       this.isLoggedIn = isLoggedIn;
  //       let redirect = this.loggedInService.redirectUrl ? this.loggedInService.redirectUrl :
  //           '/home';
  //       this.router.navigate([redirect]);
  //   });
  // }

  // logout(): void {
  //   this.loggedInService.logout()
  //     .subscribe((isLoggedIn) => {
  //       this.isLoggedIn = isLoggedIn;
  //       this.router.navigate(['/']);
  //     });
  // }
}