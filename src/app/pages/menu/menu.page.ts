import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 selectedPath = '';

  // pages = [
  //   {
  //     title: 'Dashboard',
  //     url: '/menu/agency-dashboard'
  //   },
  //   {
  //     title: 'Properties',
  //     url: '/menu/first'
  //   },
  //   {
  //     title: 'Revenues',
  //     url: '/menu/revenues'
  //   },
  //   {
  //     title: 'Agents',
  //     url: '/menu/agents'
  //   },
  //   {
  //     title: 'Contacts',
  //    url: '/menu/contacts'
  //   },
  //   {
  //     title: 'Settings',
  //    url: '/menu/second'
  //   }
  // ];
  userData: any = {'name': 'Aj Chand', 'imagePath': null};
  constructor(private router: Router,  private authService: AuthService, ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
  ngOnInit() {

  }
  gotoProfile() {
    this.router.navigate(['/profile']);
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');

  }
}
