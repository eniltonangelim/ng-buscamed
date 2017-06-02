import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoCardListComponent } from './medicamento-card-list.component';

describe('MedicamentoCardListComponent', () => {
  let component: MedicamentoCardListComponent;
  let fixture: ComponentFixture<MedicamentoCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
