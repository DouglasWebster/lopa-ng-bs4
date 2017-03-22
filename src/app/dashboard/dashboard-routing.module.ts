import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { HomeComponent } from './home/home.component';
import { LoginGuard } from '../shared/guards/login.guard';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard],
        children: [
            { path: 'home', component: HomeComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class DashboardRoutingModule { }
