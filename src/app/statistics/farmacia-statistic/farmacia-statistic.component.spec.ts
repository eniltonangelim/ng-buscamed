import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaStatisticComponent } from './farmacia-statistic.component';

describe('FarmaciaStatisticComponent', () => {
  let component: FarmaciaStatisticComponent;
  let fixture: ComponentFixture<FarmaciaStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
