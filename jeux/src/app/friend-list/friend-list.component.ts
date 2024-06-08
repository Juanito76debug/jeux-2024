import { Component, Input, OnInit } from '@angular/core';
import { Jo2024Component } from '../jo2024/jo2024.component';
import { FriendService } from './friendService';
import { CommonModule } from '@angular/common';


export interface Friend {

  pseudonyme : string;
  nom : string;
  prenom : string;
  email : string;
  genres : string;
  photos : string;
  dateNaissance : string;
  presentation : string;
  preferences : string;

}

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [Jo2024Component, CommonModule],
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  @Input() friends!: Friend[]; 

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {

    this.friends = this.friendService.getFriends();

  }

  
}


