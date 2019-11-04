import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvenuesComponent } from './myvenues.component';

describe('MyvenuesComponent', () => {
  let component: MyvenuesComponent;
  let fixture: ComponentFixture<MyvenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
