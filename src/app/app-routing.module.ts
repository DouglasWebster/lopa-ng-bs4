import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageModule } from './front-page/front-page.module';
import { DashboardModule } from './dashboard/dashboard.module';

// import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
    { path: '**', redirectTo: '/frontpage', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule,
        FrontPageModule,
        DashboardModule
    ]
})
export class AppRoutingModule { }
