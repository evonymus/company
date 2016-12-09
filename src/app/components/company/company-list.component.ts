import { Component, EventEmitter } from '@angular/core';
import { CompanyItem } from '../../model/company-item.model';

@Component({
  selector    : 'app-company-list',
  inputs      : ['companyList'],
  outputs     : ['onCompanySelected'],
  templateUrl : './company-list.component.html',
  styleUrls   : ['./company-list.component.css']
})
export class CompanyListComponent {
  companyList: CompanyItem[];
  selectedCompany: CompanyItem ;
  onCompanySelected: EventEmitter<CompanyItem>;

  constructor() {
    this.onCompanySelected = new EventEmitter<CompanyItem>();
  }

  onClick(companyItem: CompanyItem) {
    this.selectedCompany = companyItem;
    this.onCompanySelected.emit(companyItem);
    console.log("company selected: " + companyItem);
  }

  isCompanySelected(companyItem: CompanyItem) :boolean {
    if(!companyItem || !this.selectedCompany) {
      return false;
    }

    return companyItem === this.selectedCompany;
  }
}
