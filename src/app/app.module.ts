import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddressListComponent } from './components/address/address-list.component';
import { AddressInfoComponent } from './components/address/address-info.component';
import { CompanyListComponent } from './components/company/company-list.component';
import { CompanyInfoComponent } from './components/company/company-info.component';
import { CompanyContentComponent } from './components/company/company-content.component';
import { CompanyFormComponent } from './components/company/company-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddressListComponent,
    AddressInfoComponent,
    CompanyListComponent,
    CompanyInfoComponent,
    CompanyContentComponent,
    CompanyFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
