import { Routes, RouterModule } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { Jo2024Component } from './jo2024/jo2024.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { ReseauSocialComponent } from './reseau-social/reseau-social.component';
import { LoginComponent } from './login/login.component';
import { MemberAdminGuard } from './member-admin.guard';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { HomeComponent } from './home/home.component';
import { MessagePostComponent } from './message-post/message-post.component';
import { CanPostGuard } from './can-post.guard';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { MessengerComponent } from './messenger/messenger.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonnesModule } from './personnes.module';
import { AuthService } from './home/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { userModule } from './profile/user.module';
import { MembersModule } from './members.module';

export const routes: Routes = [
  { path: 'galerie', component: GalerieComponent, title: 'galerie' },
  { path: 'jo2024', component: Jo2024Component, title: 'Jo2024' },
  {
    path: 'reseau-social',
    component: ReseauSocialComponent,
    title: 'reseau-social'
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m=>m.HomeModule), title: 'Accueil' },
  
  
  { path: 'discussions instantanées', component: MessengerComponent, title: 'Discussions instantanées'},
  { path: 'personnes', loadChildren: () => import('./personnes.module').then(m => m.PersonnesModule), title: 'Utilisateurs'},
  {
    path: 'publications',
    component: MessagePostComponent,
    canActivate: [CanPostGuard],
    title: 'publications'
  },
  {
    path: 'discussion-privee',
    component: MessagerieComponent,
    canActivate: [MemberAdminGuard],
    title: 'discussion-privee'
  },

  { path: '', redirectTo: '/jo2024', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, BrowserModule, userModule, MembersModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}