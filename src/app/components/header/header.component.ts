import { Component, OnInit } from '@angular/core';

const MENU_ITEMS: string[]=['Home', 'Banking', 'Company'];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentMenu: string;

  constructor() {
    this.currentMenu = MENU_ITEMS[0];
  }

  ngOnInit() {
  }

  onClick(text:string) : void {
    console.log(text);
  }

}
