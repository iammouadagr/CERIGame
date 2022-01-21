import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError, Subscriber } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { WebSocketService } from './web-socket.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,
    private webSocket: WebSocketService
  ) { }

  login(email: string, psw: string): any {

    return this.http.post(
      `${environment.apiUrl}/login`,
      {
        email: email,
        psw: psw
      }
    )

  }

  storeUserData(response: any) {
    console.log(response);
    localStorage.setItem("token", response.session.token);
    localStorage.setItem("currentUserId", response.user.id);
    localStorage.setItem("currentUserUsername", response.session.username);
    localStorage.setItem("lastConnection", response.session.lastConnection);
    localStorage.setItem("isConnected", response.session.isConnected);
  }

  logout() {
    localStorage.clear();
  }

  isConnected() {
    return localStorage.getItem("isConnected")
  }


}
