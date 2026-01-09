import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TaxPredictionComponent } from './pages/consultation/tax-prediction/tax-prediction.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tax-prediction',
    component: TaxPredictionComponent
  }
];