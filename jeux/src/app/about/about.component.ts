import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HomeComponent, LoginComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  public olympicInfo: string;
  public socialNetworkInfo: string;

  constructor() {
    this.olympicInfo = "Les Jeux olympiques 2024 se tiendront à Paris. C'est un évenement mondial qui rassemble des athlètes de diverses disciplines.";
    this.socialNetworkInfo = "Ce réseau social est une plateforme dédiée aux fans et aux participants des Jeux Olympiques, permettant de partager des expériences et des moments forts. ";
}
}
