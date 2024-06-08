import { Injectable } from "@angular/core";
import { Friend } from "./friend-list.component";

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
    constructor() { }

    getFriends() : Friend[] {
        return this.friends;
    }

    addFriend(newFriend: Friend) {
        this.friends.push(newFriend);
    }

    removeFriend(friendPseudonyme: string): void {
        this.friends = this.friends.filter(friend => friend.pseudonyme !== friendPseudonyme);
    }

}