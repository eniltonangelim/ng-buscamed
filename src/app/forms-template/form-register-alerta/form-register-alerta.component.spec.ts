import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterAlertaComponent } from './form-register-alerta.component';

describe('FormRegisterAlertaComponent', () => {
  let component: FormRegisterAlertaComponent;
  let fixture: ComponentFixture<FormRegisterAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisterAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
