import { Component } from '@angular/core';
import { Hero } from './toh-pt1/Hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  hero: Hero = {
    id: 1,
    name: 'Windstom'
  }

}
