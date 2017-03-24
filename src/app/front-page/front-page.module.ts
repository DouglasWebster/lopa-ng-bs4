import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AdminComponent } from '../admin/admin.component';
import { AlertComponent } from '../shared/directives/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    FormsModule
  ],
  declarations: [
    FrontPageComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AlertComponent
  ]
})
export class FrontPageModule { }
