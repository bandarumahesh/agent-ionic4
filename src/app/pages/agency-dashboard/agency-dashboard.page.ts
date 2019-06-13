import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
@Component({
  selector: 'app-agency-dashboard',
  templateUrl: './agency-dashboard.page.html',
  styleUrls: ['./agency-dashboard.page.scss'],
})
export class AgencyDashboardPage implements OnInit {
  menuOptions: any = ['Contacts', 'Profile', 'settings', 'logout'];
  selectedMenu: any;
  constructor(
    private router: Router,
    public alertController: AlertController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }
  selectMenuOptions(menu) {
console.log('hell', menu, this.selectedMenu);
if (menu === 'Contacts') {
  this.router.navigate(['/menu/first/tabs/Dashboard/contacts']);
this.selectedMenu = '';
} else if (menu === 'Profile') {
  this.router.navigate(['/menu/first/tabs/Dashboard/profile']);
  this.selectedMenu = '';
} else if (menu === 'settings') {
  this.router.navigate(['/menu/first/tabs/Dashboard/settings']);
  this.selectedMenu = '';
} else if (menu === 'logout') {
this.logout();
this.selectedMenu = '';
}


  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Do you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Logout',
          handler: () => {
            this.confirmLogout();
          }
        }
      ]
    });
    await alert.present();
}

  confirmLogout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
