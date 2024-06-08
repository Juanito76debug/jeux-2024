import { Component, OnInit } from '@angular/core';
import { SearchService } from './Search.Service';
// import { CommonModule } from '@angular/common';
// import { Jo2024Component } from '../jo2024/jo2024.component';

export interface Member {
  pseudonyme: string;
  nom: string;
  prenom: string;
  email?: string;
  photos: string;
}

@Component({
  selector: 'app-user-search',
  // standalone: true,
  // imports: [Jo2024Component, CommonModule],
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  searchTerm: string = '';

  members: Member[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.members = this.searchService.getMembers();
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
  }

  search(): void {
    this.members = this.searchService
      .getMembers()
      .filter((member) =>
        member.pseudonyme.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }
  addFriend(member: Member): void {
    this.searchService.addFriend(member);
  }
}
