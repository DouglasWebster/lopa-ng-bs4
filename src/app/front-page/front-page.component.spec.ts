import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subscriber} from 'rxjs/Subscriber';

import { User } from '../shared/models';
import { UserService, AlertService } from '../shared/services';
import { FrontPageComponent } from './front-page.component';
import { AlertComponent } from '../shared/directives/alert/alert.component';

describe('FrontPageComponent', () => {
  let component: FrontPageComponent;
  let fixture: ComponentFixture<FrontPageComponent>;

  const fakeUsers = '[{"firstName":"Micky","lastName":"Mouse","userName":"mMouse",'
    + '"password":"Password1","admin":true,"id":1},{"firstName":"Daffy","lastName":"Duck",'
    + '"userName":"dDuck","password":"Password2","admin":false,"id":2}]'

  const userServiceStub = {
    getAll(): Observable<String[]> {
      return new Observable<String[]>((subscriber: Subscriber<String[]>) => subscriber.next(JSON.parse(fakeUsers)));
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        FrontPageComponent,
        AlertComponent
      ],
      providers: [
        { provide: UserService, useValue: userServiceStub },
          AlertService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
