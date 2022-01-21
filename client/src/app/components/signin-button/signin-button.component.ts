import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signin-button',
  templateUrl: './signin-button.component.html',
  styleUrls: ['./signin-button.component.css']
})
export class SigninButtonComponent implements OnInit {

  @Input() content: string;
  constructor() { }

  ngOnInit(): void {
  }

}
