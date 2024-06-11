import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { AuthService } from "../home/auth.service";

@Injectable({
    providedIn: 'root'
})

export class MessageService {
    private message: Message[] = [];

    constructor(private authService: AuthService) { }

}