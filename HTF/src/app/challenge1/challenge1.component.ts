import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCallsService, challenge1 } from '../api-calls.service';


@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.css']
})
export class Challenge1Component implements OnInit {
  

  constructor(private service:ApiCallsService) { }

  

  ngOnInit(): void {


  this.service.GetChallange1().subscribe((data:challenge1)=>{
    //get variabels from get request
    var A = data.heroDistanceFromMonster;
    var WA = data.heroWeaponHeight;
    var MH  = data.monsterHeight;
    var HL = data.monsterNeckDistance;
    //calculate angle  
    var alpha = this.calculateAngle(MH,HL,A,WA);
   
    //post naar endpoint
    this.service.PostChallange1(alpha).subscribe(data =>{
      console.log("post result: " + data.keyPart);
      
    });
  })  
  }
  // calculate angle methode 
  //TOA
  //a = atan(overstaande / aanliggende )
  calculateAngle(monsterHeight: number, monsterNeckDistance: number, heroDistanceFromMonster: number, heroWeaponHeight: number){
    let x = 0;
    let tanx = ((monsterHeight - monsterNeckDistance - heroWeaponHeight) / heroDistanceFromMonster);
    x = Math.atan(tanx) * (180 / Math.PI);
    return x
  }


  
 
}

