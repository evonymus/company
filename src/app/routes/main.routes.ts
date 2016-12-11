import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyContentComponent } from '../components/company/company-content.component';
import { CompanyFormComponent } from '../components/company/company-form.component';
import { RoeContentComponent } from '../components/roe/roe-content.component';
import { AppComponent } from "../app.component";
import { HomeComponent } from "../components/home/home.component";

export const MAIN_ROUTES: Routes = [
  {path: '', component: HomeComponent },
  {path: 'company', component: CompanyContentComponent },
  {path: 'banking', component: RoeContentComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(MAIN_ROUTES, {useHash:true});
// export const routing: ModuleWithProviders = RouterModule.forRoot(MAIN_ROUTES});
