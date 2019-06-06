import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MembershipForAgencyPage } from './membership-for-agency.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipForAgencyPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MembershipForAgencyPage]
})
export class MembershipForAgencyPageModule {}
