import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agents',
  templateUrl: './agents.page.html',
  styleUrls: ['./agents.page.scss'],
})
export class AgentsPage implements OnInit {

  constructor(   private router: Router ) { }

  ngOnInit() {
  }
addNewAgent() {
  this.router.navigate(['/menu/first/tabs/Agents/addAgents']);
}
}
