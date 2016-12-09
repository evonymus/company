import { Component, Input } from '@angular/core';
import {IpInfoModel} from '../../model/ip-info.model';

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html'
})
export class IpInfoComponent  {
  @Input() ipInfo: IpInfoModel;

  constructor() { }
}
