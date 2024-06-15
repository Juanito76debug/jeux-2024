import { Component } from '@angular/core';
import { messageriesService } from './messagerie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

interface DiscussionDetails {
  subject: string;
  id: string;
}

interface MessageDetails {
  content: string;
  id: string;
}

@Component({
  selector: 'app-messagerie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css'],
})
export class MessagerieComponent {
  discussions: DiscussionDetails[] = [];
  currentDiscussionMessages: MessageDetails[] = [];

  discussionDetails: DiscussionDetails = {
    id: '',
    subject: '',
  };

  messageDetails: MessageDetails = {
    id: '',
    content: '',
  };

  constructor(private messageriesService: messageriesService) {}

  openDiscussion(discussionDetails: any) {
    this.messageriesService.openDiscussion(this.discussionDetails).subscribe(
      (response) => {
        console.log('Discussion ouverte avec succès', response);
        this.discussions.push(response);
      },
      (error) => {
        console.log('Erreur lors de louverture de la discussion', error);
      }
    );
  }

  selectDiscussion(discussion: any) {
    this.messageriesService.getMessages(discussion.id).subscribe(
      (messages) => {
        this.currentDiscussionMessages = messages;
      },
      (error) => {
        console.error('Erreur lors de la récupération des messages', error);
      }
    );
  }

  deleteDiscussion(discussionId: string) {
    this.messageriesService.deleteDiscussion(discussionId).subscribe(
      (response) => {
        console.log('Discussion supprimée avec succès', response);
      },
      (error) => {
        console.log('Erreur lors de la suppression de la discussion', error);
      }
    );
  }

  publishMessage(messageDetails: MessageDetails) {
    this.messageriesService.publishMessage(messageDetails).subscribe(
      (response) => {
        console.log('Message publié avec succès', response);
      },
      (error) => {
        console.log('Erreur lors de lenvoi du message', error);
      }
    );
  }

  deleteMessage(messageId: string) {
    this.messageriesService.deleteMessage(messageId).subscribe(
      (response) => {
        console.log('Message supprimé avec succès', response);
      },
      (error) => {
        console.log('Erreur lors de la suppression du message', error);
      }
    );
  }

  sendMessage(messageDetails: MessageDetails) {
    if (!this.discussionDetails.id) {
      console.error('ID de la discussion manquant');
      return;
    }
    messageDetails.id = this.discussionDetails.id;
    this.messageriesService.publishMessage(messageDetails).subscribe(
      (response) => {
        console.log('Message publié avec succès', response);

        this.currentDiscussionMessages.push(response);
        this.messageDetails.content = '';
      },
      (error) => {
        console.log('Erreur lors de lenvoi du message', error);
      }
    );
  }
}
