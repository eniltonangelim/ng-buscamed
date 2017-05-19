import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserLoginComponent } from './form-user-login.component';

describe('FormUserLoginComponent', () => {
  let component: FormUserLoginComponent;
  let fixture: ComponentFixture<FormUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
