import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaListItemComponent } from './farmacia-list-item.component';

describe('FarmaciaListItemComponent', () => {
  let component: FarmaciaListItemComponent;
  let fixture: ComponentFixture<FarmaciaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
