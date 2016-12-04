import {Component } from '@angular/core';
import {CompanyItem} from '../../model/company-item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent {
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

}
