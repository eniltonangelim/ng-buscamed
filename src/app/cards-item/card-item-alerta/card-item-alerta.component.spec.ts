import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemAlertaComponent } from './card-item-alerta.component';

describe('CardItemAlertaComponent', () => {
  let component: CardItemAlertaComponent;
  let fixture: ComponentFixture<CardItemAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
