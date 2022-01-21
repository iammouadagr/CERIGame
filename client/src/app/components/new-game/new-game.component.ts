import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { QuizzService } from '../../services/quizz.service';
import { Theme } from '../../interfaces/Theme'
import { FlashMessagesService } from 'angular2-flash-messages'




@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  themes: Theme[] = [];
  difficulties: string[] = ['facile', 'intermédiaire', 'difficile'];

  selectedTheme: string;
  selectedDifficulty: number;

  startButton: string = "Lancer";

  constructor(
    private router: Router,
    private quizzService: QuizzService,
    private flashMessage: FlashMessagesService,

  ) { }

  ngOnInit(): void {
    this.quizzService.getAllThemes()
      .subscribe((res: any) => {
        res.themes.forEach((item: any) => {
          this.themes.push({
            id: item._id,
            name: item.thème
          });
        });
      });


  }

  setTheme(theme: Theme) {
    this.selectedTheme = theme.name;
  }


  setDifficulty(difficulty: string) {
    switch (difficulty) {
      case "facile":
        this.selectedDifficulty = 1
        break;
      case "intermédiaire":
        this.selectedDifficulty = 2
        break;
      case "difficile":
        this.selectedDifficulty = 3
        break;
      default:
        break;
    }
  }

  onSubmit() {
    if (this.selectedTheme && this.selectedDifficulty) this.router.navigate(['/game', { theme: this.selectedTheme, difficulty: this.selectedDifficulty }])
    else {
      this.flashMessage.show(
        "Veuiller chosir le thème ainsi que la difficulté", { cssClass: 'alert-danger', timeout: 5000 }
      );

    }

  }

}
