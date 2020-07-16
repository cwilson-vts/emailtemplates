import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L3escComponent } from './l3esc.component';

describe('L3escComponent', () => {
  let component: L3escComponent;
  let fixture: ComponentFixture<L3escComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L3escComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L3escComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
