import { Injectable } from '@angular/core';
import { Friend } from './friend-list.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  private apiUrl = 'http://localhost:3000/api/friends';

  private friends: Friend[] = [
    {
      pseudonyme: 'Edouard',
      nom: 'Diaz',
      prenom: 'Edouard',
      email: 'edouard@gmail.com',
      genres: 'Homme',
      photos: 'assets/Edouard.png',
      dateNaissance: '2000-01-01',
      presentation: 'Passionné de sports et de voyages.',
      preferences:
        'Préfère les discussions en plein air et les activités de groupe.',
    },
  ];
  constructor(private http: HttpClient) {}

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.apiUrl);
  }

  addFriend(newFriend: Friend) : Observable<Friend> {
    return this.http.post<Friend>(this.apiUrl, newFriend);
  }

  removeFriend(pseudonyme: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${pseudonyme}`);
    // this.friends = this.friends.filter(friend => friend.pseudonyme !== friendPseudonyme);
  }
}
