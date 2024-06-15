import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jo2024Component } from '../jo2024/jo2024.component';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ResetPasswordService {

  constructor(private http: HttpClient) { }

  sendResetLink(email: string) {

    const resetPasswordurl = 'http://localhost:4200';
    return this.http.post(resetPasswordurl, { email });

  }
  }

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [Jo2024Component, CommonModule],
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
