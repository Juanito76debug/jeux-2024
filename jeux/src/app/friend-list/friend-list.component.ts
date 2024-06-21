import { Component, Input, OnInit } from '@angular/core';

import { FriendService } from './friendService';
import { FormControl, ReactiveFormsModule} from '@angular/forms';

// import { Jo2024Component } from '../jo2024/jo2024.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Friend {
  pseudonyme: string;
  nom: string;
  prenom: string;
  email: string;
  genres: string;
  photos: string;
  dateNaissance: string;
  presentation: string;
  preferences: string;
}

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css'],
})
export class FriendListComponent implements OnInit {
  private _friends: Friend[] = [];
  filteredfriends: Friend[] = [];

  filterControl = new FormControl('');

  @Input ()
  set friends(value: Friend[]) {
    if (value) {
      this._friends = value;
      this.filteredfriends = value;
    } else {
      this.friendService.getFriends().subscribe((data) => {
        this._friends = data;
        this.filteredfriends = data; // Initialisez `filteredfriends` avec toutes les données
      });
  }
}

  get friends(): Friend[] {
    return this._friends;
  }
  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    if (!this._friends.length) {
    this.friendService.getFriends().subscribe((data: Friend[]) => {
      this.friends = data;
      this.filteredfriends = data; // Initialisez `filteredfriends` avec toutes les données
    });
  }

    this.filterControl.valueChanges.subscribe((searchTerm) => {
      if (searchTerm) {
        this.filteredfriends = this._friends.filter((friend) =>
          friend.pseudonyme.toLowerCase().includes(searchTerm.toLowerCase()) 
        );
      } else {
        this.filteredfriends = this._friends;
      }
    });
  }

  deleteFriend(friendPseudonyme: string) {
    this.friendService.removeFriend(friendPseudonyme).subscribe(() => {
      this.friends = this.friends.filter(
        (friend) => friend.pseudonyme !== friendPseudonyme
      );
      this.filteredfriends = this.filteredfriends.filter(
        (friend) => friend.pseudonyme !== friendPseudonyme
      );
    });
  }
}
