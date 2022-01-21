import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent implements OnInit {

  @Input() option: string;

  constructor() { }

  ngOnInit(): void {
  }

}
