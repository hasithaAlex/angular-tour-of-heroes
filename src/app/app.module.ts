import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TohPt1Component } from './toh-pt1/toh-pt1.component';

@NgModule({
  declarations: [
    AppComponent,
    TohPt1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
