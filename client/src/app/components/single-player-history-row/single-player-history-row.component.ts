import { Component, OnInit, Input } from '@angular/core';
import { History } from '../../interfaces/History'

@Component({
  selector: 'app-single-player-history-row',
  templateUrl: './single-player-history-row.component.html',
  styleUrls: ['./single-player-history-row.component.css']
})
export class SinglePlayerHistoryRowComponent implements OnInit {

  @Input() row: History;
  difficulty: string;
  constructor() { }

  ngOnInit(): void {
    switch (this.row.niveau_jeu) {
      case 1:
        this.difficulty = "facile"
        break;
      case 2:
        this.difficulty = "intermédiaire"
        break;
      case 3:
        this.difficulty = "difficile"
        break;

      default:
        break;
    }
  }

}
