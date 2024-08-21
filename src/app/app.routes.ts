import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { isAuthorized } from './your-guard.guard';

export const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent}, //default route
    { path: 'dashboard', component: DashboardComponent, canActivate: [isAuthorized]}
];
