import { Component, OnInit } from '@angular/core';
import { Results } from '../../interfaces/Results'
import { SharedService } from '../../services/shared.service'
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: Results;
  restart: string = "Relancer une nouvelle partie";

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private auth: AuthService

  ) { }

  ngOnInit(): void {

    if (!this.sharedService.recentResults) this.router.navigate(['newGame'])
    else {
      this.results = this.sharedService.recentResults;

    }

  }

  onNewGameClick(): void {
    this.router.navigate(['newGame'])
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
