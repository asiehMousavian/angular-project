import { Component } from '@angular/core';
import * as moment from 'jalali-moment';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // ndate = new Date();
   todayJalali = moment().locale('fa').format('HH:mm:ss YYYY/M/D ddd');

  cityName ='';
  result : any[];
  city ;
   constructor(private sidebarService : SidebarService) {}
   resultFunction(){
    console.log('salam', this.cityName);
    this.sidebarService.getResult(this.cityName).subscribe(
      (result: any[]) => {
      this.result = result
      console.log(this.result)
    })
  }
}
