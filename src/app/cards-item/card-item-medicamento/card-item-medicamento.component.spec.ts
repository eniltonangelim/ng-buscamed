import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemMedicamentoComponent } from './card-item-medicamento.component';

describe('CardItemMedicamentoComponent', () => {
  let component: CardItemMedicamentoComponent;
  let fixture: ComponentFixture<CardItemMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
