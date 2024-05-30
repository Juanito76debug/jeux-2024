import { Component, Injectable } from '@angular/core';
// import { UtilisateursComponent } from '../utilisateurs/utilisateurs.component';
import { utilisateurs } from '../utilisateurs.interface';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  private users : utilisateurs[] =[

    {username: 'Juanito', role: 'admin', avatar: 'assets/Juanito.png'},
    {username: 'Elena', role: 'member', friends: ['Edouard'], avatar: 'assets/Elena.png'},
    {username: 'Myriam', role: 'member', friends: ['Edouard'], avatar: 'assets/Myriam.png'},
    {username: 'Edouard', role: 'member', avatar: 'assets/Edouard.png'},
    {username: 'Rafa', role: 'visitor', avatar: 'assets/Rafa.png'},
    {username: 'Sylvie', role: 'visitor',avatar: 'assets/Sylvie.png'},
  ];

  private CurrentUser: utilisateurs | null = null;

  constructor() {}
  login(username: string): void{
    const user = this.users.find(users =>username === username);
    if(user){
      this.CurrentUser = user;
    }
  }
  logout(): void{
    this.CurrentUser = null;
  }
  get currentUser(): utilisateurs | null{
    return this.CurrentUser;
  }

  isRole(role: 'visitor' | 'member' | 'admin'): boolean{
    return this.currentUser?.role === role;
  }

}