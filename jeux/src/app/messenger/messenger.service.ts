import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../home/auth.service';

export interface Discussion {
  id: string;
  subject: string;
  messages: Message[];
}

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  authorId: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  private apiUrl = 'http://localhost:3000/api/messenger';
  private discussions = new BehaviorSubject<Discussion[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) {}
  openDiscussion(subject: string): Observable<Discussion> {
    const newDiscussion: Discussion = {
      id: this.generateUniqueId(),
      subject: subject,
      messages: [],
    };
    this.discussions.next([newDiscussion, ...this.discussions.value]);
    return this.http.post<Discussion>(
      `${this.apiUrl}/discussions`,
      newDiscussion
    );
  }

  sendMessage(discussionId: string, content: string): Observable<Message> {
    const newMessage: Message = {
      id: this.generateUniqueId(),
      content: content,
      timestamp: new Date(),
      authorId: this.authService.getCurrentUserId() || 'unknown',
    };

    const updatedDiscussions = this.discussions.value.map((discussion) => {
      if (discussion.id === discussionId) {
        return {
          ...discussion,
          messages: [...discussion.messages, newMessage],
        };
      }
      return discussion;
    });

    this.discussions.next(updatedDiscussions);
    return this.http.post<Message>(
      `${this.apiUrl}/discussion/${discussionId}/messages`,
      newMessage
    );
  }

  getMessages(discussionId: string): Observable<Message[]> {
    return this.http.get<Message[]>(
      `${this.apiUrl}/discussions/${discussionId}/messages`
    );
  }

  deleteDiscussion(discussionId: string): Observable<any> {
    this.discussions.next(
      this.discussions.value.filter(
        (discussion) => discussion.id !== discussionId
      )
    );
    return this.http.delete(`${this.apiUrl}/discussions/${discussionId}`);
  }

  deleteMessage(discussionId: string, messageId: string): Observable<any> {
    const updatedDiscussions = this.discussions.value.map((discussion) => {
      if (discussion.id === discussionId) {
        return {
          ...discussion,
          messages: discussion.messages.filter(
            (message) => message.id !== messageId
          ),
        };
      }
      return discussion;
    });

    this.discussions.next(updatedDiscussions);
    return this.http.delete(
      `${this.apiUrl}/discussion/${discussionId}/messages/${messageId}`
    );
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
