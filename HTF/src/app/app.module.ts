import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';

@NgModule({
  declarations: [
    AppComponent,
    Challenge1Component,
    Challenge2Component,
    Challenge3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
