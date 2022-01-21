import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { io, Socket } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: Socket;

  constructor() {
    this.socket = io('http://pedago.univ-avignon.fr:3145');
    this.socket.on('connect', () => {
      console.log('connected');
    })
  }

  listen(eventname: string): Observable<any> {
    return new Observable((subscribe) => {
      this.socket.on(eventname, (data) => {
        subscribe.next(data);
      })
    })
  }




}
