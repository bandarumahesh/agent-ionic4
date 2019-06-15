import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated();
  }
  }
  // @Injectable({
  //   providedIn: 'root'
  // })
  // export class AuthGuard2 implements CanActivateChild {
  //   constructor(private authService: AuthService, private router: Router ){}
  //   canActivateChild(
  //     next: ActivatedRouteSnapshot,
  //     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

  //     if(this.authService.isAuthenticated()){
  //       return true;
  //     }
  //     else{
  //       return new Promise((resolve) => {
  //         this.authService.checkToken().then((tokenExists)=>{

  //           if(tokenExists){
  //             resolve(true);
  //           }
  //           else{
  //             this.router.navigateByUrl('/login');
  //             resolve(false);
  //           }
  //         })
  //       })
  //     }

  //   }
  // }