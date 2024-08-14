import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: './', component: DashboardComponent},
    { path: 'login', component: LoginComponent}, //default route
    { path: 'dashboard', component: DashboardComponent}
];
