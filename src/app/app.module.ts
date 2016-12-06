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
import { RoeTableComponent } from './components/roe/roe-table.component';
import { RoeContentComponent } from './components/roe/roe-content.component';
import {routing} from './routes/main.routes';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddressInfoComponent,
    CompanyListComponent,
    CompanyInfoComponent,
    CompanyContentComponent,
    CompanyFormComponent,
    RoeTableComponent,
    RoeContentComponent,
    AddressListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
