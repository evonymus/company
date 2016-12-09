import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyContentComponent } from '../components/company/company-content.component';
import { CompanyFormComponent } from '../components/company/company-form.component';
import { RoeContentComponent } from '../components/roe/roe-content.component';
import { AppComponent } from "../app.component";

export const mainRoutes: Routes = [
  {path: 'home', component: AppComponent },
  {path: 'company', component: CompanyContentComponent },
  {path: 'company-form', component: CompanyFormComponent },
  {path: 'roe', component: RoeContentComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
