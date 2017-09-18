import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohPt1Component } from './toh-pt1.component';

describe('TohPt1Component', () => {
  let component: TohPt1Component;
  let fixture: ComponentFixture<TohPt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohPt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohPt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
