import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReseauSocialComponent } from './reseau-social/reseau-social.component';
import { Jo2024Component } from './jo2024/jo2024.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReseauSocialComponent, Jo2024Component,RouterOutlet],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'JEUX_2024';
}
  

