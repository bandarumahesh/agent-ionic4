import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-assigned-properties',
  templateUrl: './agent-assigned-properties.page.html',
  styleUrls: ['./agent-assigned-properties.page.scss'],
})
export class AgentAssignedPropertiesPage implements OnInit {
  agentProperties: any = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

}
