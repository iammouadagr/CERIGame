import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-difficulty-button',
  templateUrl: './difficulty-button.component.html',
  styleUrls: ['./difficulty-button.component.css']
})
export class DifficultyButtonComponent implements OnInit {

  @Input() difficulty: string
  constructor() { }

  ngOnInit(): void {
  }

}
