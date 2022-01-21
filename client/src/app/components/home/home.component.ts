import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from "@angular/router";
import { WebSocketService } from '../../services/web-socket.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lastConnection: string;

  constructor(
    private auth: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private webSocket: WebSocketService
  ) {

  }

  ngOnInit(): void {
    this.lastConnection = localStorage?.getItem('lastConnection') || "";
    this.webSocket.listen('login').subscribe((data) => {
      alert(data);
    });

  }

  onLogoutClick() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  onOverallRankingClick() {
    this.router.navigate(['/overallRanking']);
  }

  onSingleRoundRankingClick() {
    this.router.navigate(['/singleRoundRanking']);
  }

  onPlayerHistoryClick() {
    this.router.navigate(['/playerHistory']);
  }

}
