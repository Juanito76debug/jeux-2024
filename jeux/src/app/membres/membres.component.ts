import { Component, OnInit } from '@angular/core';
import { ServiceComponent} from '../service/service.component';
// import { UtilisateursComponent, utilisateurs } from '../utilisateurs/utilisateurs.component';
import { utilisateurs } from '../utilisateurs.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-membres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {
  public currentUser: utilisateurs | null = null

  
  constructor(private service: ServiceComponent) {}

  ngOnInit(): void {
    this.currentUser = this.service.currentUser;
    
  }
hasRole(role: 'visitor' | 'member' | 'admin'): boolean {
  return this.service.isRole(role);

}

}
