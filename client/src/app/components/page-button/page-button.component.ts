import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.css']
})
export class PageButtonComponent implements OnInit {

  @Input() content: string;
  constructor() { }

  ngOnInit(): void {
  }

}
