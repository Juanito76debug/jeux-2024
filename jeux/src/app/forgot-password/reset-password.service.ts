import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})

export class ResetPasswordService{

    private resetPasswordUrl = "https://localhost:4200/api/reset-password";

    constructor(private http: HttpClient) { }

    sendResetLink(email: string) {
        return this.http.post(this.resetPasswordUrl, { email });
    }
}