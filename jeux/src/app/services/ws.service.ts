import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  private socket: Socket;
  readonly uri: string='ws://localhost:3000';

  constructor() {
  this.socket = io(this.uri);
}

listen<T>(eventName: string): Observable<T>{

  return new Observable<T>((subscriber) => {
    this.socket.on(eventName, (data) => {
      subscriber.next(data);
    });
  });
}

emit<T>(eventName: string, data:T):void {
  this.socket.emit(eventName, data);
}
}

