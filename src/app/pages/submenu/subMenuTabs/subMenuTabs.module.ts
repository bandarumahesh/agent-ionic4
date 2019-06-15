import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { subMenuTabsPage } from './subMenuTabs.page';
const routes: Routes = [
  {
    path: 'subtabs',
    component: subMenuTabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../subtab1/subtab1.module#SubTab1PageModule'
      },
      // {
      //   path: 'tab1/details',
      //   loadChildren: '../details/details.module#DetailsPageModule'
      // },
      {
        path: 'tab2',
        loadChildren: '../subtab2/subtab2.module#SubTab2PageModule'
      },
      // {
      //   path: 'tab2/add-user',
      //   loadChildren: '../add-user/add-user.module#AddUserPageModule'
      // },
      {
        path: 'tab3',
        loadChildren: '../subtab3/subtab3.module#SubTab3PageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'subtabs/tab1',
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
  declarations: [subMenuTabsPage]
})
export class SubMenuTabsPageModule {}
