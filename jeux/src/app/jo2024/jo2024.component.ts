import { Component } from '@angular/core';
import { MessengerComponent } from '../messenger/messenger.component';
import { ReseauSocialComponent } from '../reseau-social/reseau-social.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jo2024',
  standalone: true,
  imports: [
    RouterModule,
    MessengerComponent,
    ReseauSocialComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './jo2024.component.html',
  styleUrls: ['./jo2024.component.css'],
})
export class Jo2024Component {
  openGallery() {
    window.open('/galerie', '_blank');
  }

  isHomePage: boolean = false;
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.urlAfterRedirects === '/home';
      });
  }
}
