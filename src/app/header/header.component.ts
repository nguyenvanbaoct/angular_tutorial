import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  slogan: string = 'Your one stop for everything.';
  getSlogan() {
    return 'This is a new slogan for this web application';
  }
  source: string = '/assets/mac.jpg';
}
