import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../message-post/user.model';

export enum UserRole {
  Visitor = 'visitor',
  Member = 'member',
  Admin = 'admin',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';
  private currentUserRole = new BehaviorSubject<UserRole>(UserRole.Visitor);
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  registerUser(username: string, password: string): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/register';
    return this.http.post<boolean>(apiUrl, { username, password });
  }

  login(username: string, password: string): Observable<boolean> {
    const apiUrl = 'http://localhost:3000/api/login';
    return this.http.post<boolean>(apiUrl, { username, password });
  }

  setUserRole(role: UserRole): void {
    this.currentUserRole.next(role);
  }

  getUserRole(): Observable<UserRole> {
    return this.currentUserRole.asObservable();
  }

  getUserRoleSync(): UserRole {
    return this.currentUserRole.value;
  }

  logout(): void {
    this.currentUserRole.next(UserRole.Visitor);
    this.currentUser.next(null);
  }

  isMemberOrAdmin(): boolean {
    return (
      this.currentUserRole.value === UserRole.Member ||
      this.currentUserRole.value === UserRole.Admin
    );
  }

  isAdmin(): boolean {
    return this.currentUserRole.value === UserRole.Admin;
  }
  getCurrentUserId(): string | null {
    return this.currentUser.value?.id || null;
  }
  canEditMessage(message: any): boolean {
    const currentUser = this.currentUser.value;
    if (currentUser) {
      return message.authorId === currentUser.id || this.isAdmin();
    }
    return false;
  }
}
