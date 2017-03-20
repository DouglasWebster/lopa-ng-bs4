import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { TopnavModule } from '../shared/topnav/topnav.module';
import { HomeModule } from './home/home.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    TopnavModule,
    HomeModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
