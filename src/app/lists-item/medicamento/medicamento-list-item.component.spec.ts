import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoListItemComponent } from './medicamento-list-item.component';

describe('MedicamentoListItemComponent', () => {
  let component: MedicamentoListItemComponent;
  let fixture: ComponentFixture<MedicamentoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
