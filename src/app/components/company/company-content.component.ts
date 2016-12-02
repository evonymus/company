import { Component } from '@angular/core';
import { CompanyItem } from '../../model/company-item.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-content',
  templateUrl: './company-content.component.html',
  styleUrls: ['./company-content.component.css'],
  providers: [CompanyService]
})
export class CompanyContentComponent {
  companyList: CompanyItem[];
  selectedCompany: CompanyItem;

  constructor(private companyService: CompanyService) {
    this.companyList = companyService.getCompanyList();
  }

  onCompanySelected(companyItem: CompanyItem): void {
    this.selectedCompany = companyItem;
    console.log("company selected");
  }



}
