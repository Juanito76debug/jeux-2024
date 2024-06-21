import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';



import { ResetPasswordService } from './reset-password.service';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
successMessage: string='';
  errorMessage: string='';

  constructor (private resetPasswordService: ResetPasswordService) { }

  resetPassword(email: string){

    this.resetPasswordService.sendResetLink(email).subscribe(
      (response) => {
        this.successMessage = 'Un lien de réinitialisation de mot de passe vous a été envoyé par email';
        this.errorMessage = '';
        console.log(response);
      },
      (error) => {
        this.errorMessage ="Une erreur est survenue lors de l'envoi du lien de ma réinitialisation.";
        this.successMessage = '';
        console.log(error);
      }
    );


  }

}
