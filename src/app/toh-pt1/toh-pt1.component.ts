import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero'

@Component({
  selector: 'app-toh-pt1',
  templateUrl: './toh-pt1.component.html',
  styleUrls: ['./toh-pt1.component.css']
})
export class TohPt1Component implements OnInit {

  constructor() { }

  hero: Hero = {
    id: 1,
    name: 'Windstom'
  }


  ngOnInit() {
  }

}


