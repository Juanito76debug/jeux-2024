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

export const routes: Routes = [
  { path: 'galerie', component: GalerieComponent, title: 'galerie' },
  { path: 'jo2024', component: Jo2024Component, title: 'Jo2024' },
  {
    path: 'reseau-social',
    component: ReseauSocialComponent,
    title: 'reseau-social',
  },
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

  { path: '', redirectTo: '/jo2024', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
