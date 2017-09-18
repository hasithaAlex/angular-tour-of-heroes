import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 


import { AppComponent } from './app.component';
import { TohPt1Component } from './toh-pt1/toh-pt1.component';
import { TohPt2Component } from './toh-pt2/toh-pt2.component';
import { TohPt3HeroDetailCompoentComponent } from './toh-pt3-hero-detail-compoent/toh-pt3-hero-detail-compoent.component';
import { TohPt3HeroCompoentComponent } from './toh-pt3-hero-compoent/toh-pt3-hero-compoent.component';

@NgModule({
  declarations: [
    AppComponent,
    TohPt1Component,
    TohPt2Component,
    TohPt3HeroDetailCompoentComponent,
    TohPt3HeroCompoentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
