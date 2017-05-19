import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterFarmaciaComponent } from './form-register-farmacia.component';

describe('FormRegisterFarmaciaComponent', () => {
  let component: FormRegisterFarmaciaComponent;
  let fixture: ComponentFixture<FormRegisterFarmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisterFarmaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
