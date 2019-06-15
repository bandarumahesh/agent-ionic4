import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agents',
  templateUrl: './agents.page.html',
  styleUrls: ['./agents.page.scss'],
})
export class AgentsPage implements OnInit {
  items: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  constructor(   private router: Router ) { }

  ngOnInit() {
  }
addNewAgent() {
  this.router.navigate(['/menu/first/tabs/Agents/addAgents']);
}
agentFullView() {
  this.router.navigateByUrl('menu/agent-full-view');

}
}
