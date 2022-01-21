import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Router } from "@angular/router";
import { OverallRow } from '../../interfaces/OverallRow'
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-over-all-ranking',
  templateUrl: './over-all-ranking.component.html',
  styleUrls: ['./over-all-ranking.component.css']
})
export class OverAllRankingComponent implements OnInit {

  standings: OverallRow[] = []
  constructor(
    private quizzService: QuizzService,
    private router: Router,
    private auth: AuthService

  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('currentUserId')) this.router.navigate(['/login'])
    else {
      this.quizzService.getOverallRanking()
        .subscribe((res: any) => {
          res.rows.forEach((element: any) => {
            this.standings.push(element);
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


