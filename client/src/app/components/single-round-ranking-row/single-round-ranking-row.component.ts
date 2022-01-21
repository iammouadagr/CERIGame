import { Component, OnInit, Input } from '@angular/core';
import { SingleRoundRow } from '../../interfaces/SingleRoundRow';


@Component({
  selector: 'app-single-round-ranking-row',
  templateUrl: './single-round-ranking-row.component.html',
  styleUrls: ['./single-round-ranking-row.component.css']
})
export class SingleRoundRankingRowComponent implements OnInit {

  @Input() row: SingleRoundRow;
  constructor() { }

  ngOnInit(): void {
  }

}
