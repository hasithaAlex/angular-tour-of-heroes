import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-toh-pt2',
  templateUrl: './toh-pt2.component.html',
  styleUrls: ['./toh-pt2.component.css']
})
export class TohPt2Component implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor() {
    const HEROES: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];    
    
    this.heroes = HEROES;    
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  ngOnInit() {
  }

  
}
