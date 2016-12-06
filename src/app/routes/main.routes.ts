import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyContentComponent } from '../components/company/company-content.component';
import { CompanyFormComponent } from '../components/company/company-form.component';

export const mainRoutes: Routes = [
  {path: 'company', component: CompanyContentComponent },
  {path: 'company-form', component: CompanyFormComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
