import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class SidebarService {

  constructor(private http : HttpClient) { 
    
  }
  getResult(cityName:string) {
      console.log(cityName);
    return this.http.get(`https://www.metaweather.com/api/location/search/?query=${cityName}`);
  }
}