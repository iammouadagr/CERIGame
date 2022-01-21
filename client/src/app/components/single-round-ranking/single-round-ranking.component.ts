import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Router } from "@angular/router";
import { SingleRoundRow } from '../../interfaces/SingleRoundRow'
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-single-round-ranking',
  templateUrl: './single-round-ranking.component.html',
  styleUrls: ['./single-round-ranking.component.css']
})
export class SingleRoundRankingComponent implements OnInit {

  standings: SingleRoundRow[] = []
  constructor(
    private quizzService: QuizzService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('currentUserId')) this.router.navigate(['/login'])
    else {
      this.quizzService.getSingleRoundRanking()
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
