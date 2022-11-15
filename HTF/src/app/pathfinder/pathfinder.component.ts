import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pathfinder',
  templateUrl: './pathfinder.component.html',
  styleUrls: ['./pathfinder.component.css']
})
export class PathfinderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}

export interface Wizard {
  total: number;

  A: Number
  B: Number
  C: Number
  D: Number
  G: Number
  I: Number
  P: Number
  S: Number
  T: Number
  W: Number
}

