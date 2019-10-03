import {Component,OnInit} from '@angular/core';
import { LoggedinService } from '../logged-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private LoggedInService: LoggedinService) { }
  ngOnInit() {
  }


}