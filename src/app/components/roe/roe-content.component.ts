import { Component } from '@angular/core';
import { NbpRoeItem } from '../../model/nbp-roe-item.model';
import { RoeService } from '../../services/roe.service';

@Component({
  selector: 'app-roe-content',
  templateUrl: './roe-content.component.html',
  providers: [RoeService]
})
export class RoeContentComponent {
  nbp: NbpRoeItem;
  loading: boolean;

  constructor( public roeService: RoeService) {
    console.log(this.roeService.getRoeList());
  }

}

