import { Component, OnInit } from '@angular/core';
import {IpInfoModel} from '../../model/ip-info.model';
import { InfoWebService } from "../../services/info-web.service";
import { GeonamesService } from "../../services/geonames.service";

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html',
  styleUrls: [ ],
  providers: [InfoWebService, GeonamesService]
})
export class IpInfoComponent implements OnInit  {
  ipInfo: IpInfoModel;

  constructor(private infoWebService: InfoWebService
    , private geo: GeonamesService) {
    this.ipInfo = new IpInfoModel();
  }

  ngOnInit() {
    this.infoWebService.getIpInfo()
    .subscribe(
      (data:IpInfoModel) => this.getIpData(data)
      err => this.ipInfo = new IpInfoModel()
    );

  }

  private getIpData(data: IpInfoModel) {
    this.ipInfo = data;
    this.getWeather();
  }

  private getWeather() {
    console.log(this.ipInfo.latitude);
    this.geo.getGeoWeather(this.ipInfo.latitude, this.ipInfo.longitude)
    .subscribe(
      (data:any) => console.log(data)
    )
  }
}
