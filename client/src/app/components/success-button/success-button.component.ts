import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-button',
  templateUrl: './success-button.component.html',
  styleUrls: ['./success-button.component.css']
})
export class SuccessButtonComponent implements OnInit {

  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
