import { Routes } from "@angular/router";
import { Home } from "./home";
import { Admin } from "./main-content/admin/admin";
import { MyInfo } from "./main-content/my-info/my-info";
import { Timesheet } from "./main-content/timesheet/timesheet";
import { Management } from "./main-content/management/management";

export const homeRoutes: Routes = [
    {
    path: 'home',
    component: Home,
    children: [
        { path: '', redirectTo: 'timesheet', pathMatch: 'full' },
        { path: 'my-profile', component: MyInfo },
        { path: 'admin', component: Admin },
        { path: 'timesheet', component: Timesheet },
        { path: 'management', component: Management}
    ]
  }
];