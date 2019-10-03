import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedinService } from './logged-in.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loggedInService: LoggedinService,
    private router: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.loggedInService.isLoggednIn()){
      return true;
    }
    else{
      this.router.navigate(['']);
      return false;
    }
  }
}