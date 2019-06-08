import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { ProfilePageModule } from '../../profile/profile.module';
ProfilePageModule
const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'agency-dashboard',
      loadChildren: '../agency-dashboard/agency-dashboard.module#AgencyDashboardPageModule' },
      {
        path: 'first',
        loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
      },
      {
        path: 'second',
        loadChildren: '../second/second.module#SecondPageModule'
      },
      {
        path: 'second/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      { path: 'profile',
      loadChildren: '../../profile/profile.module#ProfilePageModule'
     }
     ,
      { path: 'profile/details',
      loadChildren: '../../profile/profile.module#ProfilePageModule'
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
