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
    //2D array of best values per type 
    //[[best],[mid],[worst]]
    var FireValues= [["A","B","P"],["G","I","T","W"],["C","D","S"]]
    var IceValues= [["C","D","T"],["A","B","P","S"],["G","I","W"]]
    var WaterValues= [["A","G","I"],["C","D","T","W"],["B","P","S"]]
    var WindValues= [["C","P","S"],["A","B","G","I"],["D","T","W"]]



    this.service.GetChallange3().subscribe((data:challenge3)=>{
      //values from get request
      var wizzardType = data.wizardType;
      var maze = data.maze;
    
      //loop over the firs tiles
      for(var i=0; i< maze.length; i++) {
        var row = ""
        for(var j=0; j< maze[i].length; j++) {
              row+=(maze[i][j]);
        }
      //log rows for visual aid
      console.log(row);

     
      }
       //call function with right values
       if(wizzardType=="Fire"){
        this.findFirstMove(maze,FireValues);
       }else if(wizzardType=="Ice"){
        this.findFirstMove(maze,IceValues);
       }
       else if(wizzardType=="Wind"){
        this.findFirstMove(maze,WindValues);
       }else if(wizzardType=="Water"){
        this.findFirstMove(maze,WaterValues);
       }
    })
  }
  //function to find the first step
  findFirstMove(maze:string[][],values:string[][]){
    //varialbles
    var best = values[0]
    var mid= values[1]
    var worst = values[2]
    var bestValue="F";
    var tile_found= false;

    //for loop over tiles
    for(var i=0; i< maze.length; i++) {
         
      console.log(maze[i][0]);
      //loop over best case 
      if(best.includes(maze[i][0])){
        bestValue= maze[i][0];
        tile_found=true;
        this.score+=2;
      }
      //loop over mid case if tile wasnt found
      else if(tile_found == false && mid.includes(maze[i][0])){
        bestValue= maze[i][0];
        tile_found=true;
        this.score+=1;
      }
      //loop over worst case if tile wasnt found
      else if(tile_found == false && worst.includes(maze[i][0])){
        bestValue= maze[i][0];
        tile_found=true;
        this.score+=0.5;
      }     
      //log the current position
      if(tile_found){
        this.CurrentPosition= i;
      }
      
      
     
    }
    //log the steps that are taken
    this.Path.push(bestValue);
    console.log("best value: "+bestValue);
   }

}
