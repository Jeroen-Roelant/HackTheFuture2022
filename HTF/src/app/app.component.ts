import { Component } from '@angular/core';
import { CalculateAngleComponent } from './calculate-angle/calculate-angle.component';
import { DecryptComponent } from './decrypt/decrypt.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTF';
}
