import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule ,Route } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component'
import { LoggedinService } from './logged-in.service';
import { AuthGuard } from './auth.guard';
import { AppMaterialModule } from './material.module'
import { DeviceDetectorModule } from 'ngx-device-detector';
import { SidebarService } from './home/sidebar/sidebar.service';

const routes: Route[] = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent,canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppMaterialModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule
  ],
  exports: [
  ],
  providers: [LoggedinService,AuthGuard,SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
