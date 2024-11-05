import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'journals',
    loadChildren: () => import('./pages/journals/journals.module').then( m => m.JournalsPageModule)
  },
  {
    path: 'journal',
    loadChildren: () => import('./pages/journal/journal.module').then( m => m.JournalPageModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },



  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'select-contacts',
    loadChildren: () => import('./pages/select-contacts/select-contacts.module').then( m => m.SelectContactsPageModule)
  },

  {
    path: 'player-stats',
    loadChildren: () => import('./pages/player-stats/player-stats.module').then( m => m.PlayerStatsPageModule)
  },


  {
    path: 'event-list',
    loadChildren: () => import('./pages/event-list/event-list.module').then( m => m.EventListPageModule)
  },
  {
    path: 'event-create',
    loadChildren: () => import('./pages/event-create/event-create.module').then( m => m.EventCreatePageModule)
  },
  {
   path: 'event-detail/:id',
    loadChildren: () => import('./pages/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
  },
  {
    path: 'team-list',
    loadChildren: () => import('./pages/team-list/team-list.module').then( m => m.TeamListPageModule)
  },
  {
    path: 'create-team',
    loadChildren: () => import('./pages/create-team/create-team.module').then( m => m.CreateTeamPageModule)
  },
  {
    path: 'team-details',
    loadChildren: () => import('./pages/team-details/team-details.module').then( m => m.TeamDetailsPageModule)
  },
  {
    path: 'invite-member',
    loadChildren: () => import('./pages/invite-member/invite-member.module').then( m => m.InviteMemberPageModule)
  },
  {
    path: 'rate-participant',
    loadChildren: () => import('./pages/rate-participant/rate-participant.module').then( m => m.RateParticipantPageModule)
  },
  {
    path: 'user-feedback',
    loadChildren: () => import('./pages/user-feedback/user-feedback.module').then( m => m.UserFeedbackPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./pages/chat-list/chat-list.module').then( m => m.ChatListPageModule)
  },
  {
    path: 'chat-detail',
    loadChildren: () => import('./pages/chat-detail/chat-detail.module').then( m => m.ChatDetailPageModule)
  },
  {
    path: 'skip1',
    loadChildren: () => import('./pages/skip1/skip1.module').then( m => m.Skip1PageModule)
  },
  {
    path: 'skip2',
    loadChildren: () => import('./pages/skip2/skip2.module').then( m => m.Skip2PageModule)
  },
  {
    path: 'skip3',
    loadChildren: () => import('./pages/skip3/skip3.module').then( m => m.Skip3PageModule)
  },
  {
    path: 'skip4',
    loadChildren: () => import('./pages/skip4/skip4.module').then( m => m.Skip4PageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./pages/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  {
    path: 'passwordchanged',
    loadChildren: () => import('./pages/passwordchanged/passwordchanged.module').then( m => m.PasswordchangedPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
 
  {
    path: 'not',
    loadChildren: () => import('./pages/not/not.module').then( m => m.NotPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
