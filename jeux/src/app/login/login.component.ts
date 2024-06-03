import { Component } from '@angular/core';
import { AuthService } from '../home/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  errorMessage: string='';

  constructor(private authService: AuthService, private router : Router) {}

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/home']);
          
        }else {
          this.errorMessage = 'Identifiant ou mot de passe invalide';
      }
    });
  }
}
