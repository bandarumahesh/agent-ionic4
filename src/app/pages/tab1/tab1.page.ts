import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  goToPlanets() {
    this.navController.navigateRoot('/menu/first/tabs/tab1/details')
  }
}
