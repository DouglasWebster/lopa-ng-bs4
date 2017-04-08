/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from '../shared/helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { User } from '../shared/models';
import { UserService, AlertService, AuthenticationService } from '../shared/services';
import { AlertComponent } from '../shared/directives/alert/alert.component';
import { LoginComponent } from './login.component';

import { click } from '../../testing/click-helper';

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
        AuthenticationService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,

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

  it(`should have the page header containing 'LOPA'`, () => {
    expect(debugEl.query(By.css('h1')).nativeElement.textContent).toContain('LOPA');
  });

  it('should have 2 buttons', () => {
    const btns = debugEl.queryAll(By.css('.btn'));
    expect(btns.length).toEqual(2, 'Incorrect number of buttons');
  });

  it(`should have button 1 labled 'Login'`, () => {
    const btn = debugEl.queryAll(By.css('button'))[0];
    expect(btn.nativeElement.innerText).toContain('Login');
  });

  it(`should have button 2 labled 'Register'`, () => {
    const btn = debugEl.queryAll(By.css('.btn'))[1];
    expect(btn.nativeElement.innerText).toContain('Register');
  });

  it('should notify the user if Login is pressed without a user name being entered', () => {
    const btn = debugEl.queryAll(By.css('.btn'))[0];
    console.log('Login Pressed using button: ', btn);
    click(btn);
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
    const msg = debugEl.queryAll(By.css('.help-block'))[0];
    console.log('help block: ', msg);

    expect(msg.nativeElement.innerText).toContain('Register', 'Wrong message to user');
  });

});
