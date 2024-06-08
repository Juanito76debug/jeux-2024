import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jo2024Component } from '../jo2024/jo2024.component';

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
  imports: [Jo2024Component],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor (private resetPasswordService: ResetPasswordService) { }

  resetPassword(email: string){

    this.resetPasswordService.sendResetLink(email).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );


  }

}
