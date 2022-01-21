import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Router } from "@angular/router";
import { History } from '../../interfaces/History'
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-player-history',
  templateUrl: './player-history.component.html',
  styleUrls: ['./player-history.component.css']
})
export class PlayerHistoryComponent implements OnInit {

  playerHistory: History[] = [];


  constructor(
    private quizzService: QuizzService,
    private router: Router,
    private auth: AuthService

  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('currentUserId')) this.router.navigate(['/login'])
    else {
      this.quizzService.getHistory(JSON.parse(localStorage.getItem("currentUserId")!))
        .subscribe((res: any) => {
          res.rows.forEach((element: any) => {
            switch (element.niveau_jeu) {
              case 1:
                element.niveau_jeu = "facile"
                break;
              case 2:
                element.niveau_jeu = "intermédiaire"
                break;
              case 3:
                element.niveau_jeu = "difficile"
                break;

              default:
                break;
            }
            this.playerHistory.push(element);
          });


        });
    }

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
