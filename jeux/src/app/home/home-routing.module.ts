
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LogoutComponent } from '../logout/logout.component';
import { SignupComponent } from '../signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Accueil' },
  { path: 'login', component: LoginComponent, title: 'Connexion'},
  { path: 'about', component: AboutComponent, title: 'À propos'},
  { path: 'forgot-password', component: ForgotPasswordComponent, title: 'Mot de Passe Oublié'},
  { path: 'logout', component: LogoutComponent, title: 'Déconnexion'},
  { path: 'signup', component: SignupComponent, title: 'Inscription'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class HomeRoutingModule { }