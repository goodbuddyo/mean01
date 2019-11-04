import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table05Component } from './table05.component';

describe('Table05Component', () => {
  let component: Table05Component;
  let fixture: ComponentFixture<Table05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
