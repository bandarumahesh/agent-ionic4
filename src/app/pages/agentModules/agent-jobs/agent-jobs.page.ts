import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-jobs',
  templateUrl: './agent-jobs.page.html',
  styleUrls: ['./agent-jobs.page.scss'],
})
export class AgentJobsPage implements OnInit {
  agentProperties: any = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

}
