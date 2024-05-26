import { Routes } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { Jo2024Component } from './jo2024/jo2024.component';

export const routes: Routes = [
  { path: 'galerie', component: GalerieComponent, title: 'Galerie' },
  { path: 'jo2024', component: Jo2024Component, title: 'Jo2024' },
];
