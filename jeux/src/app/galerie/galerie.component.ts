import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Jo2024Component } from '../jo2024/jo2024.component';

export interface Photos {
  nom: string;
  image: string;
  description: string;
  auteur: string;
}

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [Jo2024Component, RouterModule, CommonModule],
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css'],
})
export class GalerieComponent {

  lieuxOlympiques: Photos[] =[
    {
      nom:'Flamme Olympique',
      image:'assets/flamme-olympique.avif',
      description:'Flamme Olympique',
      auteur:'Florent Manaudou'
    },
    {
    nom: 'Centre aquatique',
    image: 'assets/centre-aquatique.webp',
    description: 'Natation artistique, plongée et waterpolo', 
    auteur: 'Centre aquatique'},
    {
      nom:'Grand Palais',
      image:'assets/grand-palais.avif',
      description:'Escrime et Taekwondo',
      auteur:'Grand Palais'},
      {
        nom: 'Roland Garros',
        image: 'assets/roland-garros.avif',
        description: 'Boxe et Tennis',
        auteur: 'Roland Garros'
      },
      {
        nom: 'Stade de France',
        image: 'assets/stade-de-france.avif',
        description: 'Athlétisme et Rugby à sept',
        auteur: 'Stade de France'
      }
    

    
  ];
}
