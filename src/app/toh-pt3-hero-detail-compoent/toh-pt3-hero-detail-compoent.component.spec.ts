import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohPt3HeroDetailCompoentComponent } from './toh-pt3-hero-detail-compoent.component';

describe('TohPt3HeroDetailCompoentComponent', () => {
  let component: TohPt3HeroDetailCompoentComponent;
  let fixture: ComponentFixture<TohPt3HeroDetailCompoentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohPt3HeroDetailCompoentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohPt3HeroDetailCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
