import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-subtab1',
  templateUrl: './subtab1.page.html',
  styleUrls: ['./subtab1.page.scss'],
})
export class SubTab1Page implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  goToPlanets() {
    this.navController.navigateRoot('/menu/first/tabs/tab1/details');
  }
}
