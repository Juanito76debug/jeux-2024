import { Injectable } from "@angular/core";
import { Member } from "./user-search.component";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class SearchService {

  private members: Member[] = [
    {pseudonyme: 'Myriam', nom:'Romano', prenom: 'Myriam', email : 'myriam@gmail.com', photos: 'assets/Myriam.png'},
  ];

  constructor(private http : HttpClient) { }

  searchMember(searchTerm: string): Observable<Member[]> {
    
    return this.http.get<Member[]>(`https://localhost:3000/members/search/${searchTerm}`);

  }

  getMembers(): Member[] {
    return this.members;
  }

  addFriend(member: Member): void {
    this.members.push(member);
  }

}