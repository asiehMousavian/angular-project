import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
// import { HttpClient,http } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  deviceInfo = null;
  constructor(private deviceService: DeviceDetectorService) {
    this.deviceInfoFunction();
  }
  deviceInfoFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    // const isMobile = this.deviceService.isMobile();
    // const isTablet = this.deviceService.isTablet();
    // const isDesktopDevice = this.deviceService.isDesktop();
    // console.log(this.deviceInfo);
  }
}