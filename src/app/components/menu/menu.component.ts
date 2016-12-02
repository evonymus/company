import { Component, EventEmitter} from '@angular/core';
import { MenuItem } from '../../model/menu-item.model';

@Component({
  selector: 'app-menu',
  inputs: ['menuItems'],
  outputs:['onMenuItemSelected'],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  menuItems: MenuItem[];
  menuItemSelected: MenuItem;

  onMenuItemSelected: EventEmitter<MenuItem>;

  constructor() {
    this.onMenuItemSelected = new EventEmitter();
  }

  onClick(menuItem: MenuItem) {
    this.menuItemSelected = menuItem;
    this.onMenuItemSelected.emit(menuItem);
    console.log("Menu item selected " + menuItem.name);
  }
}
