import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WsService } from "../services/ws.service";

@Injectable({
  providedIn: "root",
})

export class ResetPasswordService{

    private resetPasswordUrl = "https://localhost:3000/api/reset-password";

    constructor(private http: HttpClient, private wsService: WsService) { }

    sendResetLink(email: string): Observable<any> {
        return this.http.post(this.resetPasswordUrl, { email });


    }

    listenForResetConfirmation(): Observable<any> {
      return this.wsService.listen("reset-password-confirmation");
    }
}