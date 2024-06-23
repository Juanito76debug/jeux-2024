import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { AuthService } from '../home/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = 'http://localhost:3000/messages';

  constructor(private http: HttpClient, private authService: AuthService) {}
  publishMessage(content: string): Observable<Message> {
    const message = { content, authorId: this.authService.getCurrentUserId() };
    return this.http.post<Message>(this.apiUrl, message);
  }

  sendReply(messageId: string, content: string): Observable<Message> {
    const reply = { content, authorId: this.authService.getCurrentUserId() };
    return this.http.post<Message>(
      `${this.apiUrl}/${messageId}/replies`,
      reply
    );
  }

  deleteMessage(messageId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${messageId}`);
  }
}
