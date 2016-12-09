import { Component, Input } from '@angular/core';
import { NbpRoeItem } from '../../model/nbp-roe-item.model';

@Component({
  selector: 'app-roe-table',
  templateUrl: './roe-table.component.html'
})

export class RoeTableComponent {
  @Input() nbp: NbpRoeItem;
  loading: boolean;

}
