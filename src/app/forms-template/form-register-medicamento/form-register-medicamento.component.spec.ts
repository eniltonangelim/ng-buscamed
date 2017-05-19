import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterMedicamentoComponent } from './form-register-medicamento.component';

describe('FormRegisterMedicamentoComponent', () => {
  let component: FormRegisterMedicamentoComponent;
  let fixture: ComponentFixture<FormRegisterMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisterMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
