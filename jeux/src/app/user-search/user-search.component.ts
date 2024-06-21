import { Component, OnInit } from '@angular/core';
import { SearchService } from './Search.Service';
import { CommonModule } from '@angular/common';

import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, filter, map } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


export interface Member {
  pseudonyme: string;
  nom: string;
  prenom: string;
  email?: string;
  photos: string;
}

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  
  searchControl= new FormControl('');
  searchTerm: string = '';

  members: Member[] = [];

  constructor(private searchService: SearchService) {}

  

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      map(searchTerm=>searchTerm || ''),
      filter(searchTerm => searchTerm.trim() !== ''), // Filtrer les valeurs null et les chaînes vides
      debounceTime(300),
      switchMap((searchTerm: string) => this.searchService.searchMember(searchTerm))
    ).subscribe(members => {
      this.members = members;
    });
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
