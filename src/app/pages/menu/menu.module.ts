import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { AddAgentsPage } from '../add-agents/add-agents.page';
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
    { path: 'agent-full-view', loadChildren: '../agent-full-view/agent-full-view.module#AgentFullViewPageModule' },
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
