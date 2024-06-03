import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  public olympicInfo: string;
  public socialNetworkInfo: string;

  constructor() {
    this.olympicInfo = "Les Jeux olympiques 2024 se tiendront à Paris. C'est un évenement modial qui rassemble des athlètes de diverses disciplines.";
    this.socialNetworkInfo = "Ce réseau soical est une plateforme dédiée aux fans et aux participants des Jeux Olympiques, permettant de partager des expériences et des moments forts. ";
}
}
