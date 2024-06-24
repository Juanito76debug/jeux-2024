import { Component, OnInit } from '@angular/core';
import { WsService } from '../services/ws.service';

interface ChatMessage{

  message: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  messages: string[] = [];
  newMessage: string='';

  constructor(private wsService: WsService) { }

  ngOnInit(): void {
    this.wsService.listen<ChatMessage>('chat message').subscribe((data) => {
      console.log(data.message);
    });
  }

  sendMessage(): void {
    this.wsService.emit('chat message', this.newMessage);
    this.newMessage = '';
  }

}
