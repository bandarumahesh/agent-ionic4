import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.page.html',
  styleUrls: ['./submenu.page.scss'],
})
export class SubMenuPage implements OnInit {
 selectedPath = '';

  pages = [
    {
      title: 'Dashboard',
      url: '/submenu/agency-dashboard'
    },
    {
      title: 'Properties',
      url: '/submenu/first'
    },
    {
      title: 'Revenues',
      url: '/submenu/revenues'
    },
    {
      title: 'Agents',
      url: '/submenu/agents'
    },
    {
      title: 'Contacts',
     url: '/submenu/contacts'
    },
    {
      title: 'Settings',
     url: '/submenu/second'
    }
  ];
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
