import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { canActivateDashboard } from './auth-guard';

export const routes: Routes = [
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent}, //default route
    { path: 'dashboard', component: DashboardComponent, canActivate: [canActivateDashboard]}
];
