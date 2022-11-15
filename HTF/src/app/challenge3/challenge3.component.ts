import { Component, OnInit } from '@angular/core';
import { ApiCallsService, challenge3 } from '../api-calls.service';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.css']
})

export class Challenge3Component implements OnInit {
  Path: string[]=[];
  score:number=0;

  CurrentPosition = 0;
  constructor(private service: ApiCallsService) { }

  ngOnInit(): void {
    //[[best],[mid],[worst]]
    var FireValues= [["A","B","P"],["G","I","T","W"],["C","D","S"]]
    var IceValues= [["C","D","T"],["A","B","P","S"],["G","I","W"]]
    var WaterValues= [["A","G","I"],["C","D","T","W"],["B","P","S"]]
    var WindValues= [["C","P","S"],["A","B","G","I"],["D","T","W"]]



    this.service.GetChallange3().subscribe((data:challenge3)=>{
      // var wizzardType = data.wizardType;
      // var maze = data.maze;
      var wizzardType= "Fire";
      var maze = [
        [
            "F",
            "F",
            "F",
            "F",
            "F",
            "F",
            "F",
            "F",
            "F"
        ],
        [
            "F",
            "F",
            "F",
            "F",
            "F",
            "F",
            "F",
            "F",
            "F"
        ],
        [
            "I",
            "F",
            "C",
            "F",
            "F",
            "F",
            "B",
            "T",
            "F"
        ],
        [
            "W",
            "P",
            "F",
            "G",
            "F",
            "A",
            "F",
            "F",
            "D"
        ],
        [
            "F",
            "F",
            "F",
            "F",
            "I",
            "F",
            "F",
            "F",
            "F"
        ],
        [
            "B",
            "F",
            "T",
            "P",
            "D",
            "W",
            "F",
            "T",
            "F"
        ],
        [
            "F",
            "S",
            "C",
            "G",
            "F",
            "T",
            "S",
            "F",
            "W"
        ],
        [
            "C",
            "T",
            "F",
            "F",
            "F",
            "F",
            "D",
            "G",
            "F"
        ],
        [
            "F",
            "F",
            "F",
            "F",
            "F",
            "F",
            "F",
            "F",
            "F"
        ]
    ]

      console.log("type:" + wizzardType);
    
      for(var i=0; i< maze.length; i++) {
        var row = ""
        for(var j=0; j< maze[i].length; j++) {
              row+=(maze[i][j]);
        }
        console.log(row);

     
      }
       //call function with right values
       if(wizzardType=="Fire"){
        this.findNextMove(maze,FireValues);
       }else if(wizzardType=="Ice"){
        this.findNextMove(maze,IceValues);
       }
       else if(wizzardType=="Wind"){
        this.findNextMove(maze,WindValues);
       }else if(wizzardType=="Water"){
        this.findNextMove(maze,WaterValues);
       }
    })
  }

  findNextMove(maze:string[][],values:string[][]){

    //dubbele for
    var best = values[0]
    var mid= values[1]
    var worst = values[2]
    var bestValue="F";
    var tile_found= false;


    console.log("possibilitys");

    for(var i=0; i< maze.length; i++) {
         
      console.log(maze[i][0]);
      //loop over best case 
      if(best.includes(maze[i][0])){
        bestValue= maze[i][0];
        tile_found=true;
        this.score+=2;
      }else if(tile_found == false && mid.includes(maze[i][0])){
        bestValue= maze[i][0];
        tile_found=true;
        this.score+=1;
      }else if(tile_found == false && worst.includes(maze[i][0])){
        bestValue= maze[i][0];
        tile_found=true;
        this.score+=0.5;
      }

           
      
      
     
    }
    
    this.Path.push(bestValue);
    console.log("best value: "+bestValue);
    
  }

}
