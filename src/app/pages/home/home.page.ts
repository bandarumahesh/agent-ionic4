import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user = {
  name: 'mahesh',
  email: 'mahi@gmail.com',
  address: {
    zip: '673383',
    city: 'hyderabad',
    state: 'telangana'
  }
  };
  authState$: Observable<boolean>;
  return = '';
  router_url: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.authState$ = this.authService.getAuthStateObserver();

    // Get the query params
    // this.route.queryParams
    //   .subscribe(params => this.return = params['return'] || '/home');
  }

  detailswithqueryparams() {

const navigationExtras: NavigationExtras = {
  queryParams: {
    special: 'required string', // for string
    // special:JSON.stringify(this.user)
  }
};
this.authService.login().then(
  _ => this.router.navigate(['/membership'], navigationExtras)
);

    // end
    // check in membership page
  }


  detailswithservice() {
    console.log(this.user);

    this.dataService.setData(42, this.user);
    // this.router.navigateByUrl('/membership/42')
    this.authService.login().then(
      _ => this.router.navigateByUrl('/membership/42')
    );
  }

  detailswithstate() {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.authService.login().then(
      _ => this.router.navigate(['/membership'], navigationExtras)
    );
  }

  logout() {
    this.authService.logout();
  }
  signIn(){
    this.router.navigate(['/login']);
  }
  signUp() {
    this.router.navigate(['/signup']);
  }
}

// link for data share
// https://www.youtube.com/watch?v=XyLcPdv1LKM



//  for model and pophover
// https://www.youtube.com/watch?v=jRxPOs1OM34
