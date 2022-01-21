import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CountdownConfig, CountdownEvent, CountdownComponent } from 'ngx-countdown';
import { Results } from '../../interfaces/Results'
import { SharedService } from '../../services/shared.service'
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  selectedTheme: string;
  selectedDifficulty: string;
  questionContent: string;
  options: string[];
  rightAnswer: string = "";
  currentPage: number;
  nextPage: number;
  previousPage: number;
  roundPlayersAnswer: string = "";
  rightAnswers: number = 0;
  playerScore: number;

  nextPageButton = "Suivant";
  previousPageButton = "Précedent";




  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  config: CountdownConfig = { leftTime: 450 };
  startTime: number = 450000;
  roundTime: number;


  constructor(
    private quizzService: QuizzService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private auth: AuthService


  ) { }

  ngOnInit(): void {

    this.selectedTheme = this.route.snapshot.paramMap?.get('theme') || "";
    this.selectedDifficulty = this.route.snapshot.paramMap?.get('difficulty') || "";
    if (this.selectedTheme != "" && this.selectedDifficulty != "") {
      this.fetchQuestion(1);

    } else {
      this.router.navigate(['/newGame']);
    }


  }

  fetchQuestion(page: number): void {
    this.quizzService.getQuestionsBytheme(this.selectedTheme, page)
      .subscribe((res: any) => {
        this.nextPage = res.questions.next?.page || 0;
        this.previousPage = res.questions.previous?.page || 0;
        res.questions.data.forEach((element: any) => {

          this.questionContent = element.question;
          this.options = element.propositions
            .filter((item: any) => item !== element.réponse)
            .slice(0, this.selectedDifficulty);
          this.rightAnswer = element.réponse;
          this.options.push(this.rightAnswer);
          this.shuffleArray(this.options);



        });
      });
  }



  onNextPage(): void {
    this.verifyRightAnswer();
    console.log(this.nextPage);
    if (this.nextPage != 0) this.fetchQuestion(this.nextPage);
    else {
      console.log("Partie términée !! ");

      this.countdown.stop();
      this.submitRound();
    }



  }

  onPreviousPage(): void {
    this.verifyRightAnswer();
    console.log(this.previousPage);
    if (this.previousPage != 0) this.fetchQuestion(this.previousPage);
  }

  handleEvent(e: CountdownEvent) {
    console.log(e);
    if (e.action === "stop") {
      this.roundTime = this.startTime - e.left;
    }
    else if (e.action === "done") {
      this.roundTime = this.startTime;
      this.submitRound();
    }


  }

  verifyRightAnswer() {
    if (this.roundPlayersAnswer === this.rightAnswer) {
      console.log("Right answer");
      this.rightAnswers++;
    }
    else console.log("Wrong answer")
  }
  onOptionClick(option: string): void {
    console.log(option);
    this.roundPlayersAnswer = option;


  }

  submitRound() {
    this.quizzService.submitRound(
      {
        user: JSON.parse(localStorage.getItem("currentUserId")!),
        difficulty: parseInt(this.selectedDifficulty),
        rightAnswers: this.rightAnswers,
        time: this.roundTime / 1000

      }
    ).subscribe((res: any) => {
      console.log(res);
      this.sharedService.updateResults(res);
      this.router.navigate(['/results']);
    });
  }

  shuffleArray(array: string[]): any {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
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
