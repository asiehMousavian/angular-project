import { Component, OnInit } from '@angular/core';
import { LoggedinService } from '../../logged-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private LoggedInService: LoggedinService) {}
  ngOnInit(){};
  logout() {
    this.LoggedInService.logout();
  }
}