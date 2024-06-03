import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export enum UserRole {
  Visitor = 'visitor',
  Member = 'member',
  Admin = 'admin',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserRole = new BehaviorSubject<UserRole>(UserRole.Visitor);

  constructor(private http: HttpClient) {}

  registerUser(username: string, password: string) : Observable<any>{

    const apiUrl = 'your-backend-api';
    return this.http.post(apiUrl, {username, password});
  }

  login(username: string, password: string): Observable<boolean> {
    return new Observable((subscriber) => {
      const credentialsAreValid =
        username === 'user' && password === 'password';
      subscriber.next(credentialsAreValid);
      subscriber.complete();
    });
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
  }

}
