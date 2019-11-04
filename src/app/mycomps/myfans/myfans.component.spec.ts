import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfansComponent } from './myfans.component';

describe('MyfansComponent', () => {
  let component: MyfansComponent;
  let fixture: ComponentFixture<MyfansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
