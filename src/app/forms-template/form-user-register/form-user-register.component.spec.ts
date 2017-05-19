import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserRegisterComponent } from './form-user-register.component';

describe('FormUserRegisterComponent', () => {
  let component: FormUserRegisterComponent;
  let fixture: ComponentFixture<FormUserRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
