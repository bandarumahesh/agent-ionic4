import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgentAssignedPropertiesPage } from './agent-assigned-properties.page';

const routes: Routes = [
  {
    path: '',
    component: AgentAssignedPropertiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgentAssignedPropertiesPage]
})
export class AgentAssignedPropertiesPageModule {}
