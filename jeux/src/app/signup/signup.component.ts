import { Component } from '@angular/core';
import { AuthService } from '../home/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private authService : AuthService) { }

  signup (username : string, password : string){

    this.authService.registerUser(username, password).subscribe(
      (response) => {

        console.log ('utilisateur inscrit avec succès !', response)
    },
      (error) => {
        console.log ('erreur lors de l\'inscription', error)
      

});
}

}


