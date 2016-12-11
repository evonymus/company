import {Injectable} from '@angular/core';
import {MenuItem} from '../model/menu-item.model';

@Injectable()
export class MenuService {
  menu: MenuItem[];

  constructor() {
  }

 getMainMenu(): MenuItem[] {
    return [new MenuItem({name:"home", loc:['']})
      , new MenuItem({name:"Banking",loc:['/banking']})
      , new MenuItem({name:"Company",loc:['/company']})];
 }
  getMenu() : MenuItem[] {
    return [new MenuItem({name:'ONE', loc:'#1'})
    , new MenuItem({name:'TWO',loc:'#2'})
    , new MenuItem({name:'THREE', loc:'#3'})];
  }


}
