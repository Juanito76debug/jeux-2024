import { Component } from '@angular/core';
import { AuthService } from '../home/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService : AuthService, private router : Router ) { }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
