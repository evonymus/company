import { Component } from '@angular/core';
import { CompanyItem } from './../../model/company-item.model';

@Component({
  selector: 'app-company-info',
  inputs: ['company'],
  templateUrl: './company-info.component.html'
})
export class CompanyInfoComponent {
  company: CompanyItem;

}
