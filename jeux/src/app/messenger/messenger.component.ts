import { Component } from '@angular/core';
import { MessengerService } from './messenger.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export interface Message {

  content: string;
  timestamp: Date;
  authorId: string;
}

@Component({
  selector: 'app-messenger',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent {
  messages: Message[] = [];
  newMessage = '';
  currentUserId = 'votre-id-utilisateur';
  showMessenger = true;

  constructor(private messengerService: MessengerService) { }

  closeMessenger() {
    this.showMessenger = false;
  }

  sendMessage() {
    if(this.newMessage.trim()) {
      this.messengerService.sendMessage('id-de-la-discussion', this.newMessage).subscribe((message)=>{
        this.messages.push(message);
        this.newMessage = '';
      },
      (error)=>{
        console.error('Erreur lors de l\envoi du message', error);
      }
      );
    }

  }

    
  }


