import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { homeRoutes } from './features/home/home.routes';

export const routes: Routes = [
    ...homeRoutes,
    { path: '', redirectTo: '/home/timesheet', pathMatch: 'full' },
    { path: 'login', component: Login },
];