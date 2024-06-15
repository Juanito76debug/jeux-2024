import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-reseau-social',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './reseau-social.component.html',
  styleUrls: ['./reseau-social.component.css']
})
export class ReseauSocialComponent {

}
