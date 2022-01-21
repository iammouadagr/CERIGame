import { Component, OnInit, Input } from '@angular/core';
import { OverallRow } from '../../interfaces/OverallRow';

@Component({
  selector: 'app-overall-ranking-row',
  templateUrl: './overall-ranking-row.component.html',
  styleUrls: ['./overall-ranking-row.component.css']
})
export class OverallRankingRowComponent implements OnInit {

  @Input() row: OverallRow;

  constructor() { }

  ngOnInit(): void {
  }

}
