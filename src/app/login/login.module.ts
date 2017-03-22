import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/register.component';
import { AlertComponent } from '../shared/directives/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ]
})
export class LoginModule { }
