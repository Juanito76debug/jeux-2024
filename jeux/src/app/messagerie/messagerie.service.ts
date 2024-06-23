import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from '../home/auth.service';

@Injectable({
  providedIn: 'root',
})
export class messageriesService {
  private apiUrl = 'http://localhost:3000/api/messageries';

  constructor(private http: HttpClient, private authService: AuthService) {}

  openDiscussion(discussionDetails: any): Observable<any> {
    if (this.authService.isMemberOrAdmin()) {
      return this.http.post(this.apiUrl + '/discussion', discussionDetails);
    } else {
      return of(null);
    }
  }

  deleteDiscussion(discussionId: string): Observable<any> {
    if (this.authService.isAdmin()) {
      return this.http.delete(this.apiUrl + '/discussion/' + discussionId);
    } else {
      return of(null);
    }
  }

  publishMessage(messageDetails: any): Observable<any> {
    if (this.authService.isMemberOrAdmin()) {
      return this.http.post(this.apiUrl + '/messages', messageDetails);
    } else {
      return of(null);
    }
  }

  getMessages(discussionId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `{this.apiUrl}/discussions/${discussionId}/messages`
    );
  }

  deleteMessage(messageId: string): Observable<any> {
    if (this.authService.canEditMessage(messageId)) {
      return this.http.delete(this.apiUrl + '/messages/' + messageId);
    } else {
      return of(null);
    }
  }
}
