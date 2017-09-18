import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohPt2Component } from './toh-pt2.component';

describe('TohPt2Component', () => {
  let component: TohPt2Component;
  let fixture: ComponentFixture<TohPt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohPt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohPt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
