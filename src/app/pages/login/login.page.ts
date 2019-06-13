import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { Observable , interval} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage
  ) { }
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
  show = false;
  passwordType = 'password';
  passwordIcon = 'eye-off';

  ngOnInit() {
    this.authState$ = this.authService.getAuthStateObserver();
console.log('hello', this.authState$);
    // Get the query params
    // this.route.queryParams
    //   .subscribe(params => this.return = params['return'] || '/home');
  }
// for testing purpose
  login(route) {
   if ( this.storage.get('membership')) {
      this.router_url = '/menu/first';
    } else if (route === 1 ) {
       this.router_url = '/membership';
    } else {
       this.router_url = '/login';
    }
       this.authService.login().then(
      _ => this.router.navigateByUrl(this.router_url)
    );
  }

  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  userLogin(userdata) {
if (userdata.email && userdata.userPassword) {
  this.router_url = '/membership';
  this.authService.login().then(
    _ => this.router.navigateByUrl(this.router_url)
  );
}
  }
  forgotPassword() {
    this.router.navigateByUrl('/forgot-password');
  }
  logout() {
    this.authService.logout();
  }
  }
