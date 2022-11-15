import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-angle',
  templateUrl: './calculate-angle.component.html',
  styleUrls: ['./calculate-angle.component.css']
})
export class CalculateAngleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.calculateAngle(12.89, 1.289, 21.3, 1.9))
  }

  calculateAngle(monsterHeight: number, monsterNeckDistance: number, heroDistanceFromMonster: number, heroWeaponHeight: number){
    let x = 0;
    let tanx = ((monsterHeight - monsterNeckDistance - heroWeaponHeight) / heroDistanceFromMonster);
    x = Math.atan(tanx) * (180 / Math.PI);
    return x
  }
}
