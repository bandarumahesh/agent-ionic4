import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { DataResolverService } from './resolver/data-resolver.service';
// import { AuthGuard } from '@core/auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'menu', canActivate: [AuthGuard], loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'submenu', canActivate: [AuthGuard], loadChildren: './pages/submenu/submenu/submenu.module#SubMenuPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  // { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
  // { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  // { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  // { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
  // { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
  // { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  // { path: 'add-user', loadChildren: './pages/add-user/add-user.module#AddUserPageModule' },
  { path: 'membership',
  canActivate: [AuthGuard],
  loadChildren: './pages/membership-for-agency/membership-for-agency.module#MembershipForAgencyPageModule' },
  { path: 'chatBoardList', loadChildren: './pages/chatModules/chat-board-list/chat-board-list.module#ChatBoardListPageModule' },
  { path: 'chatMessagesRoom', loadChildren: './pages/chatModules/chat-messages-room/chat-messages-room.module#ChatMessagesRoomPageModule' },
  // { path: 'agent-assigned-properties',
  // loadChildren: './agent-assigned-properties/agent-assigned-properties.module#AgentAssignedPropertiesPageModule' },
  // { path: 'agent-jobs', loadChildren: './agent-jobs/agent-jobs.module#AgentJobsPageModule' },
  // { path: 'agent-full-view', loadChildren: './pages/agent-full-view/agent-full-view.module#AgentFullViewPageModule' },
  // { path: 'membership/:id', canActivate: [AuthGuard],
  // loadChildren: './pages/membership-for-agency/membership-for-agency.module#MembershipForAgencyPageModule' },
  // { path: 'agency-dashboard', loadChildren: './pages/agency-dashboard/agency-dashboard.module#AgencyDashboardPageModule' },
  // { path: 'revenues', loadChildren: './pages/revenues/revenues.module#RevenuesPageModule' },
  // { path: 'agents', loadChildren: './pages/agents/agents.module#AgentsPageModule' },
  // { path: 'contacts', loadChildren: './pages/contacts/contacts.module#ContactsPageModule' },
  // { path: 'add-agents', loadChildren: './pages/add-agents/add-agents.module#AddAgentsPageModule' },

];
// canActivate: [AuthGuard],
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
