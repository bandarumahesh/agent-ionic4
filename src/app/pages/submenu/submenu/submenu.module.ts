import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubMenuPage } from './submenu.page';
// import { AddAgentsPage } from '../add-agents/add-agents.page';



const routes: Routes = [
  {
    path: '',
    component: SubMenuPage,
    children: [
      { path: 'agency-dashboard',
      loadChildren: '../../agency-dashboard/agency-dashboard.module#AgencFirstWithTabsPageModuleyDashboardPageModule' },
      {
        path: 'first',
        loadChildren: '../subMenuTabs/subMenuTabs.module#SubMenuTabsPageModule'
      }
      ,
      {
        path: 'second',
        loadChildren: '../../second/second.module#SecondPageModule'
      },
      // {
      //   path: 'second/details',
      //   loadChildren: '../../details/details.module#DetailsPageModule'
      // },
      { path: 'profile',
      loadChildren: '../../../profile/profile.module#ProfilePageModule'
     }
     ,
      { path: 'profile/details',
      loadChildren: '../../../profile/profile.module#ProfilePageModule'
     },
     { path: 'revenues', loadChildren: '../../revenues/revenues.module#RevenuesPageModule' },
     { path: 'agents', loadChildren: '../../agents/agents.module#AgentsPageModule' },
     { path: 'contacts', loadChildren: '../../contacts/contacts.module#ContactsPageModule' },
     { path: 'add-agents', loadChildren: '../../add-agents/add-agents.module#AddAgentsPageModule' },

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
  declarations: [SubMenuPage]
})
export class SubMenuPageModule {}
