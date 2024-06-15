import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { AuthService } from '../home/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './message-post.component.html',
  styleUrls: ['./message-post.component.css']
})
export class MessagePostComponent {

messageContent: string = '';
  replyContent: string = '';
  messages: any[] = [];

  constructor(private messageService: MessageService, private authService: AuthService) { }

  publishMessage(): void {
    if (this.authService.isMemberOrAdmin()) {

    if (this.messageContent.trim()) {
      this.messageService.publishMessage(this.messageContent).subscribe({next: (response) => {

        console.log ('Message envoyé avec succès', response);
        this.messageContent = '';
        
    },

    error: (error) => {
      console.error('Erreur lors de l\envoi du message', error);
    }

  });

}else {
  console.error('Vous devez être membre ou administrateur pour publier des messages.');
}

    }
  }
    

    replyToMessage(messageId: string): void {
      if (this.replyContent.trim()){

      console.log ('Répondre au message');

      this.messageService.sendReply(messageId, this.replyContent).subscribe({next: (response) => {

        console.log ('réponse envoyée avec succès', response);
        this.replyContent = '';
        let message = this.messages.find((m:any) => m.id === messageId);
        if (message){
          message.replies = message.replies || [];
          message.replies.push(response);
        }

        
      }, 
      error: (error) => {
        console.error('Erreur lors de l\envoi de la réponse', error);
    
  }

});

}
    }

    deleteMessage(messageId:string): void{
      this.messageService.deleteMessage(messageId).subscribe({next: (response) => {
        console.log ('Message supprimé avec succès', response);
        this.messages = this.messages.filter((m:any)=>m.id !== messageId);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression du message', error);
        }
      });
    }
canEdit(message: any): boolean {
  return this.authService.canEditMessage(message);



}

  }
