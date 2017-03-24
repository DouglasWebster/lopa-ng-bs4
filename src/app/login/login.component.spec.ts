/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { User } from '../shared/models';
import { UserService, AlertService,AuthenticationService } from '../shared/services';
import { AlertComponent } from '../shared/directives/alert/alert.component';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
        FormsModule
      ],
      declarations: [
        LoginComponent,
        AlertComponent
      ],
      providers: [
        UserService,
        AlertService,
        AuthenticationService
      ]
    });
    // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the page header containing 'SB Admin'`, () => {
    expect(debugEl.query(By.css('h1')).nativeElement.textContent).toContain('LOPA');

  });

});
