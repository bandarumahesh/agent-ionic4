import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from  '@angular/common/http';
const TOKEN_KEY = 'X-Auth-Token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  redirectUrl: string;
  constructor(private  httpClient:  HttpClient,
    private storage: Storage,
    private platform: Platform, private router: Router
  ) {
    this.platform.ready().then(_ => {
      this.checkToken();
    });
  }
  private checkToken(): Promise<void> {
    return this.storage.get('TOKEN_KEY').then(res => {
      if (res) {
        console.log('hellotest');
        this.authState$.next(true);
      }
    });
  }
  public login(): Promise<void> {
    return this.storage.set('TOKEN_KEY', 'Bearer 123456').then(res => {
      this.authState$.next(true);
    });
  }
  public logout(): Promise<void> {
    return this.storage.remove('TOKEN_KEY').then(_ => {
      this.authState$.next(false);
      this.storage.clear();
    });
  }
  public getAuthStateObserver(): Observable<boolean> {
    return this.authState$.asObservable();
  }
  public isAuthenticated() {
    // console.log(this.redirectUrl)
    // if (this.redirectUrl) {
    //   console.log(this.redirectUrl)
    //   this.router.navigate([this.redirectUrl]);
    // }
    return this.authState$.value;
  }
}