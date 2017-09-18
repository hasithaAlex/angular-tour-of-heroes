import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-toh-pt3-hero-detail-compoent',
  templateUrl: './toh-pt3-hero-detail-compoent.component.html',
  styleUrls: ['./toh-pt3-hero-detail-compoent.component.css']
})
export class TohPt3HeroDetailCompoentComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
