import { Routes, RouterModule } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { Jo2024Component } from './jo2024/jo2024.component';
import { NgModule } from '@angular/core';
import { randomGuard } from './garde-route.';
import { MembresComponent} from './membres/membres.component';


export const routes: Routes = [
  { path: 'galerie', component: GalerieComponent, title: 'galerie' },
  { path: 'jo2024', component: Jo2024Component, title: 'Jo2024' },
  { path: 'membres', component: MembresComponent, canActivate: [randomGuard], data: {expectedRole: 'member'} },
  { path: '', redirectTo: '/jo2024', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
