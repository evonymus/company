import {Component, Input
, OnInit
, OnChanges
} from '@angular/core';
import {CompanyItem} from '../../model/company-item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent implements OnChanges, OnInit {
 @Input() company: CompanyItem ;
  companyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.companyForm = fb.group({
      'name': ['', Validators.required],
      'nameLong': [''],
      'nip': ['']
    });
  }

  onSubmit(form: any) :void {
    console.log("submitted value: ", form);
  }

  ngOnChanges() {
    if(this.company === null) {
      this.company = new CompanyItem();
    }
    console.log("CompanyFormComponent: OnChanges");
  }

  ngOnInit() {
    console.log("CompanyFormComponent:onInit");
  }



}
