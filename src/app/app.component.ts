import { Component } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {MenuItem} from './model/menu-item.model';
import { MenuService } from './services/menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService]
})
export class AppComponent {
  menuItems: MenuItem[];


  constructor(menuService: MenuService) {
    this.menuItems = menuService.getMainMenu();
  }
  // handler for onItemSelected of the menu-item component
  onMenuItemSelected(menuItem: MenuItem) {
    console.log("Selected: " + menuItem.name);
  }

}
