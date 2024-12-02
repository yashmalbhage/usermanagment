import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddUserFormComponent } from './pages/add-user-form/add-user-form.component';
export const routes: Routes = [
    {path: '', component:AddUserFormComponent},
    {path:'Dashboard', component:DashboardComponent }
];
