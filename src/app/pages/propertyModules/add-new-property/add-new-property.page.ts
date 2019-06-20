import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-property',
  templateUrl: './add-new-property.page.html',
  styleUrls: ['./add-new-property.page.scss'],
})
export class AddNewPropertyPage implements OnInit {
  constructor(private router: Router) { }
  wizardStep = 1;
  showPropertyAddress = false;
  searchlist: any;
  isCustomLocation: any;
  unitNumber:any;
  items: any = [
    {
      'address': '19 carlton street',

    },
    {

      'address': '423 george street Granville nsw',

    },
    {

      'address': '423 george street Granville nsw',

    },
    {

      'address': '43 george street Granville nsw',

    },
    {

      'address': '423 calton street Granville nsw',

    },
    {
     'address': 'qld',

    },
    {

      'address': '433 george street Granville nsw',

    },
    {
     'address': '13 george street Granville nsw',

    },

  ];
  agentSearchListItems: any = [];
    rentalType:any;
    vacantType:any;
    propertyCategoryId:any;

  ngOnInit() {
  }

  filterItem(value) {
    if (value) {
      this.agentSearchListItems = Object.assign([], this.items).filter(
        item => item.address.toLowerCase().indexOf(value.toLowerCase()) > -1
     );
    } else {
      this.agentSearchListItems = [];
    }
 }
 getPropertyAddress(address) {
    console.log('hello');
  if (address) {
    this.searchlist = address;
  this.showPropertyAddress = address;
  this.agentSearchListItems = [];

  }
 }
 propertyNotFound(event) {
   
 }
  gonext() {
      this.wizardStep++;
    }
    gotoPreviousStep() {
      this.wizardStep--;
    }
    selectVacantType(value) {
      // let valuee = status;
      if (value === 1) {
        this.vacantType = false;
        this.rentalType = true;
        this.propertyCategoryId = 1;
      } else if (value === 2) {
        this.rentalType = false;
        this.vacantType = true;
        this.propertyCategoryId = 2;
      }
    }
    gotoProperties(){
      this.router.navigate(['/menu/first/tabs/Properties']);
    }
}
