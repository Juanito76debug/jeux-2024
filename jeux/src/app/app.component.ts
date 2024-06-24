import { Component,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReseauSocialComponent } from './reseau-social/reseau-social.component';
import { Jo2024Component } from './jo2024/jo2024.component';
import { MessengerComponent } from './messenger/messenger.component';
import { UserProfile } from './profile/profile.component';
import { UserService } from './profile/user.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReseauSocialComponent, Jo2024Component, MessengerComponent,RouterOutlet, FormsModule, ReactiveFormsModule],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  

  title = 'JEUX_2024';
  data: UserProfile | undefined;

  constructor(private userService: UserService) {
    const currentUserPseudonyme = 'admin'
    
    this.data = this.userService.getUserProfile(currentUserPseudonyme);

}




}


  

