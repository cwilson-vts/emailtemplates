import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsComponent } from './ns.component';

describe('NsComponent', () => {
  let component: NsComponent;
  let fixture: ComponentFixture<NsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
