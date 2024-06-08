import { Injectable } from "@angular/core";
import { Member } from "./user-search.component";

@Injectable({
  providedIn: "root"
})

export class SearchService {

  private members: Member[] = [
    {pseudonyme: 'Myriam', nom:'Romano', prenom: 'Myriam', email : 'myriam@gmail.com', photos: 'assets/Myriam.png'},
  ];

  constructor() { }

  searchMember(pseudonyme: string): Member | undefined {
    
    return this.members.find(member => member.pseudonyme=== pseudonyme);

  }

  getMembers(): Member[] {
    return this.members;
  }

  addFriend(member: Member): void {
    this.members.push(member);
  }

}