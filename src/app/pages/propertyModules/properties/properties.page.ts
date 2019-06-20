import { Component, ViewChild, OnInit } from '@angular/core';
import {IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {
  @ViewChild('pageSlider2') pageSlider2: IonSlides;
  tabs: any = 0;
  properties = [1, 2, 3, 4, 5, 6, 7];
  globaldata: any = [];
  constructor() {
  }

  ngOnInit() {
  }
  selectedtab(type) {

  this.tabs = type;
console.log('hello', type);
  }


changeWillSlide($event) {
  this.tabs = $event.target.swiper.realIndex;
  console.log('hh', this.tabs );
}
}
