import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { Jo2024Component } from './jo2024/jo2024.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalerieComponent, Jo2024Component, RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'JEUX_2024';
}
