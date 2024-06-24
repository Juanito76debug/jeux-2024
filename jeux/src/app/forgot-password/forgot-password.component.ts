import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WsService } from '../services/ws.service';



import { ResetPasswordService } from './reset-password.service';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
successMessage: string='';
  errorMessage: string='';

  constructor (private wsService: WsService) { }

  resetPassword(email: string): void {

    this.wsService.emit('reset-password', { email: this.email });

    // Écouter la réponse du serveur via WebSocket
    this.wsService.listen<any>('password-reset-response').subscribe((response) => {
      if (response.success) {
        this.successMessage = 'Un lien de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Une erreur est survenue lors de la réinitialisation du mot de passe.';
        this.successMessage = '';
      }
  });

  }
  }


