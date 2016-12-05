import { Component } from '@angular/core';
import { NbpRoeItem } from '../../model/nbp-roe-item.model';

@Component({
  selector: 'app-roe-table',
  inputs: ['nbp', 'loading'],
  templateUrl: './roe-table.component.html'
})

export class RoeTableComponent {
  nbp: NbpRoeItem;
  loading: boolean;

}
