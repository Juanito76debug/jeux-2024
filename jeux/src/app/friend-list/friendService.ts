import { Injectable } from "@angular/core";
import { Friend } from "./friend-list.component";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})

export class FriendService {

    private friends : Friend[] = [
        {
            pseudonyme: 'Edouard',
            nom : 'Diaz',
            prenom : 'Edouard',
            email : 'edouard@gmail.com',
            genres : 'Homme',
            photos : 'assets/Edouard.png',
            dateNaissance :'2000-01-01',
            presentation : 'Passionné de sports et de voyages.',
            preferences : 'Préfère les discussions en plein air et les activités de groupe.'
        }
    ];
    constructor(private http : HttpClient) { }

    getFriends() : Friend[] {
        return this.friends;
    }

    addFriend(newFriend: Friend) {
        this.friends.push(newFriend);
    }

    removeFriend(friendPseudonyme: string): Observable<any> {
        return this.http.delete(`http://localhost:4200/friends/${friendPseudonyme}`);
        // this.friends = this.friends.filter(friend => friend.pseudonyme !== friendPseudonyme);
    }

    


}