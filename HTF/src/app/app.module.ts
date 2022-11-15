import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CalculateAngleComponent } from './calculate-angle/calculate-angle.component';
import { DecryptComponent } from './decrypt/decrypt.component';
import { PathfinderComponent } from './pathfinder/pathfinder.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateAngleComponent,
    DecryptComponent,
    PathfinderComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    Crypto,
    RouterModule.forRoot([
      { path: '', component: DecryptComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
