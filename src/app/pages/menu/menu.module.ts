import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      // { path: 'agency-dashboard',
      // loadChildren: '../agency-dashboard/agency-dashboard.module#AgencyDashboardPageModule' },
      {
        path: 'first',
        loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
      },
      {
        path: 'properties/addProperty',
        loadChildren: '../propertyModules/add-new-property/add-new-property.module#AddNewPropertyPageModule'
      },
    //   {
    //     path: 'second',
    //     loadChildren: '../second/second.module#SecondPageModule'
    //   },
    //   {
    //     path: 'second/details',
    //     loadChildren: '../details/details.module#DetailsPageModule'
    //   },
    //   { path: 'profile',
    //   loadChildren: '../../profile/profile.module#ProfilePageModule'
    //  }, 
    //  ,
    //   { path: 'profile/details',
    //   loadChildren: '../../profile/profile.module#ProfilePageModule'
    //  },
    //  { path: 'revenues', loadChildren: '../revenues/revenues.module#RevenuesPageModule' },
    //  { path: 'agents', loadChildren: '../agents/agents.module#AgentsPageModule' },
     { path: 'contacts', loadChildren: '../contacts/contacts.module#ContactsPageModule' },
    //  { path: 'add-agents', loadChildren: '../add-agents/add-agents.module#AddAgentsPageModule' },
    { path: 'agent-full-view', loadChildren: '../agentModules/agent-full-view/agent-full-view.module#AgentFullViewPageModule' },
    {
      path: 'Agents/addAgents',
      loadChildren: '../agentModules/add-agents/add-agents.module#AddAgentsPageModule'
    },
    {
      path: 'agent-full-view/agentProperties/agentJobs',
      loadChildren: '../agentModules/agent-jobs/agent-jobs.module#AgentJobsPageModule'
    },
    {
      path: 'agent-full-view/agentProperties',
      loadChildren: '../agentModules/agent-assigned-properties/agent-assigned-properties.module#AgentAssignedPropertiesPageModule'
    },
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
