import { AuthServiceService } from './../auth/auth-service.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router/'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private authService:AuthServiceService,
    private router : Router
  ) { }

  canActivate(
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
  ):Observable<boolean>|boolean{
    if(this.authService.isAuthAutenticado()){
      return true;
    }
    console.log('user e pass incorrect , by AuthGuard')
    this.router.navigate(['login/'])
    return false;
  }
}
