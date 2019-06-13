import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  router_url: string;
  constructor( private router: Router,  private authService: AuthService ) { }

  ngOnInit() {
  }
  register(form) {

    this.router_url = '/membership';
    this.authService.login().then(
      _ => this.router.navigateByUrl(this.router_url)
    );

  }
}
