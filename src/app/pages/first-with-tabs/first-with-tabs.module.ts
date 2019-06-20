import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FirstWithTabsPage } from './first-with-tabs.page';
import { PropertiesPageModule } from '../propertyModules/properties/properties.module';
import { ChatBoardListPageModule } from '../chatModules/chat-board-list/chat-board-list.module';


const routes: Routes = [
  {
    path: 'tabs',
    component: FirstWithTabsPage,
    children: [
      {
        path: 'Dashboard',
        loadChildren: '../agency-dashboard/agency-dashboard.module#AgencyDashboardPageModule'
      },
      // {
      //   path: 'tab1/details',
      //   loadChildren: '../details/details.module#DetailsPageModule'
      // },
      {
        path: 'Properties',
        loadChildren: '../propertyModules/properties/properties.module#PropertiesPageModule'

      },
      // {
      //   path: 'properties/addProperty',
      //   loadChildren: '../add-new-property/add-new-property.module#AddNewPropertyPageModule'
      // },
      {
        path: 'Agents',
        loadChildren: '../agents/agents.module#AgentsPageModule'
      },
      // {
      //   path: 'Agents/addAgents',
      //   loadChildren: '../add-agents/add-agents.module#AddAgentsPageModule'
      // },
      {
        path: 'Chat',
        loadChildren: '../chatModules/chat-board-list/chat-board-list.module#ChatBoardListPageModule'
      },
      {
        path: 'Dashboard/profile',
        loadChildren: '../../profile/profile.module#ProfilePageModule'
      },
      {
        path: 'Dashboard/contacts',
        loadChildren: '../contacts/contacts.module#ContactsPageModule'
      },
      {
        path: 'Dashboard/settings',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/Dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstWithTabsPage]
})
export class FirstWithTabsPageModule {}
