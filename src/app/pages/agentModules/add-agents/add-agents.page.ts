import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-agents',
  templateUrl: './add-agents.page.html',
  styleUrls: ['./add-agents.page.scss'],
})
export class AddAgentsPage implements OnInit {
  items: any = [
    {
      'id': 1,
      'name': 'mahesh',
      'email': 'mahesh@gmail.com',
      'number': 9294249294
    },
    {
      'id': 2,
      'name': 'chaityna',
      'email': 'chaityna@gmail.com',
      'number': 9294249112
    },
    {
      'id': 3,
      'name': 'raj',
      'email': 'raj@gmail.com',
      'number': 9294249223
    },
    {
      'id': 4,
      'name': 'raghu',
      'email': 'raghu@gmail.com',
      'number': 9294249552
    },
    {
      'id': 5,
      'name': 'mahesh2',
      'email': 'mahesh2@gmail.com',
      'number': 9294246643
    },
    {
      'id': 6,
      'name': 'aj',
      'email': 'aj@gmail.com',
      'number': 9294249234
    },
    {
      'id': 7,
      'name': 'jake',
      'email': 'jake@gmail.com',
      'number': 9294249264
    },
    {
      'id': 7,
      'name': 'george',
      'email': 'george@gmail.com',
      'number': 9294249253
    },
    {
      'id': 7,
      'name': 'george2',
      'email': 'george2@gmail.com',
      'number': 9294434534
    },
  ];
  agentSearchListItems: any = [];
  sendInviteView = false;
  showAgentSearchlist = true;
  newAgentView = false;
  showAdgentSuccessfullAdd = false;
  searchlist;
  constructor(    private router: Router,) { }
  ngOnInit() {
  }
  sendInvite() {
this.sendInviteView = true;
this.showAgentSearchlist = false;
setTimeout(() => {
  this.sendInviteView = false;
  this.showAgentSearchlist = true;
  this.router.navigate(['/menu/first/tabs/Agents']);
}, 4000);
  }
 filterItem(value) {
    if (value) {
      this.agentSearchListItems = Object.assign([], this.items).filter(
        item => item.email.toLowerCase().indexOf(value.toLowerCase()) > -1
     );
    } else{
      this.agentSearchListItems = [];
    }
 }
 addNewAgent(){
  this.sendInviteView = false;
  this.showAgentSearchlist = false;
  this.newAgentView = true;
 }
 AddNewAgentUpload(){
  this.sendInviteView = false;
  this.showAgentSearchlist = false;
  this.newAgentView = false;
  this.showAdgentSuccessfullAdd = true;
  setTimeout(() => {
    this.router.navigate(['/menu/first/tabs/Agents']);
  }, 4000);
 }
}
