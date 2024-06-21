import { Component } from '@angular/core';
import { AuthService } from '../home/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  successMessage: string='';
  errorMessage: string='';

  constructor(private authService : AuthService) { }

  signup (username : string, password : string){

    this.authService.registerUser(username, password).subscribe(
      (response) => {
        this.successMessage = 'Utilisateur inscrit avec succès';
        this.errorMessage = '';

        console.log ('utilisateur inscrit avec succès !', response)
    },
      (error) => {
        this.successMessage = '';
        this.errorMessage = 'Erreur lors de l\'inscription';
        console.log ('erreur lors de l\'inscription', error)
      

});
}

}


