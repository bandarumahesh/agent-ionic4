import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
@Component({
  selector: 'app-first-with-tabs',
  templateUrl: './first-with-tabs.page.html',
  styleUrls: ['./first-with-tabs.page.scss'],
})
export class FirstWithTabsPage implements OnInit {
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
if (menu == 'Contacts') {

} else if (menu == 'Profile') {
  this.router.navigate(['/menu/first/tabs/Dashboard/Profile']);
} else if (menu == 'settings') {

} else {
this.logout();
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
