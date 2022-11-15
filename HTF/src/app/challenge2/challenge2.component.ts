import { Component, OnInit } from '@angular/core';
import { ApiCallsService, challenge2 } from '../api-calls.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css']
})
export class Challenge2Component implements OnInit {

  constructor(private service:ApiCallsService) { }

  ngOnInit(): void {
    this.service.GetChallange2().subscribe((data:challenge2)=>{
      var key = data.key;
      var iv = data.iv;
      var spell= data.spell;
  
      console.log("key: " +key);
      console.log("iv: " +iv);
      console.log("spell: " +spell);
      this.decrypt(spell,key,iv);
    })  
  }

  decrypt(spell:string,key:string,iv:string){
  
   if(key.length < 16 ){
      //verleng key
      while(key.length != 16){
        key = key + "0";
      }
    }
   if(iv.length < 16){
      //verleng iv 
      while(iv.length != 16){
        iv = iv + "0";
      }
    }
 
    
    if(key.length == 16 && iv.length == 16){
      //decrypt
      console.log("start decrypt");
      

      var decrypted_spell= this.decryptMessage(spell,key,iv)
      this.service.PostChallange2(decrypted_spell).subscribe(data =>{
        console.log("post result: " + data.keyPart);
        
      });

    }

    
 
    
    
  }

  decryptMessage(spell: string, key: string, iv: string){
    var _key = CryptoJS.enc.Utf8.parse(key);
    var _iv = CryptoJS.enc.Utf8.parse(iv);
    let decryptedData = CryptoJS.AES.decrypt(spell, _key, {
      iv: _iv
    });
    console.log("finish decrypt");

    
    return decryptedData.toString(CryptoJS.enc.Utf8);


    

  }


}
