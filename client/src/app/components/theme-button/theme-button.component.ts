import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../../interfaces/Theme'


@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.css']
})
export class ThemeButtonComponent implements OnInit {

  @Input() theme: Theme
  constructor() { }

  ngOnInit(): void {
  }

}
