import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemFarmaciaComponent } from './list-item-farmacia.component';

describe('ListItemFarmaciaComponent', () => {
  let component: ListItemFarmaciaComponent;
  let fixture: ComponentFixture<ListItemFarmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemFarmaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
