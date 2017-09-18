import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohPt3HeroCompoentComponent } from './toh-pt3-hero-compoent.component';

describe('TohPt3HeroCompoentComponent', () => {
  let component: TohPt3HeroCompoentComponent;
  let fixture: ComponentFixture<TohPt3HeroCompoentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohPt3HeroCompoentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohPt3HeroCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
