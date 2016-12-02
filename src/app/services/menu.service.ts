import {Injectable} from '@angular/core';
import {MenuItem} from '../model/menu-item.model';

@Injectable()
export class MenuService {
  menu: MenuItem[];

  constructor() {
  }

 getMainMenu(): MenuItem[] {
    return [new MenuItem({name:"Company", url:"company"})
      , new MenuItem({name:"Product",url:"product"})
      , new MenuItem({name:"Configuration",url:"configuration"})];
 }
  getMenu() : MenuItem[] {
    return [new MenuItem({name:'ONE', url:'#1'})
    , new MenuItem({name:'TWO',url:'#2'})
    , new MenuItem({name:'THREE', url:'#3'})];
  }


}
