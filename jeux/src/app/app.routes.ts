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


export const routes: Routes = [
  { path: 'galerie', component: GalerieComponent, title: 'galerie' },
  { path: 'jo2024', component: Jo2024Component, title: 'Jo2024' },
  {
    path: 'reseau-social',
    component: ReseauSocialComponent,
    title: 'reseau-social',
  },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'A propos' },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuard],
    title: 'inscription',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    title: 'Connexion',
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [AuthGuard],
    title: 'Mot de Passe Oublié',
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [MemberAdminGuard],
    title: 'Déconnexion',
  },
  { path : 'profile', component: ProfileComponent, title: 'Profile'},
  { path : 'friends', component: FriendListComponent, title: 'friendList'},
  { path: 'membres', component:UserSearchComponent, title: 'userSearch'},
  { path : 'publications', component:MessagePostComponent, canActivate : [CanPostGuard], title: 'publications'}, 
  

  { path: '', redirectTo: '/jo2024', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
