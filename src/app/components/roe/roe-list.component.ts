import { Component } from '@angular/core';
import { RoeItem } from '../../model/roe-item.model';

@Component({
  selector: 'app-roe-list',
  templateUrl: 'roe-list.component.html'

})
export class RoeListComponent {
  roeList: RoeItem[] = [];

}
