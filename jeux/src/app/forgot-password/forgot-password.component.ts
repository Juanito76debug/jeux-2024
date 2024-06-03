import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  imports: [],
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
