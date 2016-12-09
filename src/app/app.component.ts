import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {MenuItem} from './model/menu-item.model';
import { MenuService } from './services/menu.service';
import { InfoWebService } from './services/info-web.service';
import { IpInfoModel } from './model/ip-info.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService, InfoWebService]
})
export class AppComponent  implements OnInit{
  menuItems: MenuItem[];
  ipInfo: IpInfoModel;


  constructor(private menuService: MenuService
        , private infoWebService: InfoWebService) {
    this.menuItems = menuService.getMainMenu();
  }
  // handler for onItemSelected of the menu-item component
  onMenuItemSelected(menuItem: MenuItem) {
    console.log("Selected: " + menuItem.name);
  }

  ngOnInit() {
    this.infoWebService.getIpInfo()
    .subscribe(
      // (data:IpInfoModel)=>this.ipInfo = data
      (data:any)=> console.log(data)
    );

  }

}
