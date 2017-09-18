import { Component, OnInit  } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-toh-pt3-hero-compoent',
  templateUrl: './toh-pt3-hero-compoent.component.html',
  styleUrls: ['./toh-pt3-hero-compoent.component.css']
})
export class TohPt3HeroCompoentComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor() {
    const HEROES: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' }
    ];        
    this.heroes = HEROES;    
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
