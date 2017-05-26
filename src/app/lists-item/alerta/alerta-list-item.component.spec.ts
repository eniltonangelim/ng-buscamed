import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaListItemComponent } from './alerta-list-item.component';

describe('AlertaListItemComponent', () => {
  let component: AlertaListItemComponent;
  let fixture: ComponentFixture<AlertaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
