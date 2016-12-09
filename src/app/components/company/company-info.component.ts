import { Component, Input
  , OnChanges } from '@angular/core';
import { CompanyItem } from './../../model/company-item.model';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html'
})
export class CompanyInfoComponent implements OnChanges {
  @Input() company: CompanyItem;


  ngOnChanges() {
    console.log("CompanyInfoComponent: OnChanges");
  }
}
