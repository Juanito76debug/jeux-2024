import { Component, Input } from '@angular/core';


export interface UserProfile {

  
  pseudonyme : string;
  nom : string;
  prenom : string;
  email : string;
  genres : string;
  photos : string;
  dateNaissance : string;
  presentation : string;
  preferences : string;
  userType : 'admin' | 'member' | 'visitor'; 
}

@Component({
  selector: 'app-profile',
  // standalone: true,
  // imports: [],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profiles: UserProfile[] = [];

  @Input() userProfile: UserProfile;

  constructor() {
    this.userProfile = this.adminProfile;
  }

  
  
  adminProfile :UserProfile = {

    pseudonyme : 'Juanito',
    nom : 'Gimenez',
    prenom : 'Juan',
    email : 'juanito@gmail.com',
    genres : 'Homme',
    photos : 'assets/Juanito.png',
    dateNaissance : '1985-06-15',
    presentation : 'Administrateur passionné par les sports Olympiques.',
    preferences : 'Natation',
    userType : 'admin'
  };

  memberProfile : UserProfile = {
    pseudonyme : 'Elena',
    nom : 'Martinez',
    prenom : 'Elena',
    email : 'elena@gmail.com',
    genres : 'Femme',
    photos : 'assets/Elena.png',
    dateNaissance : '1992-09-24',
    presentation : 'Membre actif et sportive.',
    preferences : 'Athlétisme',
    userType :'member'

  };

  visitorProfile : UserProfile = {
    pseudonyme : 'Sly',
    nom : 'Ferreira',
    prenom : 'Sylvie',
    email :'sylvie@gmail.com',
    genres : 'Femme',
    photos : 'assets/Sylvie.png',
    dateNaissance : '1990-03-05',
    presentation : 'Visiteuse intéressée par les Jeux olympiques.',
    preferences : 'Gymnastique',
    userType : 'visitor'
  };

}
