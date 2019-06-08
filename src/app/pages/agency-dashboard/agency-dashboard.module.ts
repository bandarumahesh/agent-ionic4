import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgencyDashboardPage } from './agency-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: AgencyDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgencyDashboardPage]
})
export class AgencyDashboardPageModule {}
