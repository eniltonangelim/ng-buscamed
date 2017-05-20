import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemFarmaciaComponent } from './card-item-farmacia.component';

describe('CardItemFarmaciaComponent', () => {
  let component: CardItemFarmaciaComponent;
  let fixture: ComponentFixture<CardItemFarmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemFarmaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
