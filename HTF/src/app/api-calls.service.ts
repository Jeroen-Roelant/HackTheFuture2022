import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'mathjs';

//format return type get request api 1
export interface challenge1 {
  monsterHeight: number;
  monsterNeckDistance: number;
  heroDistanceFromMonster: number;
  heroWeaponHeight: number;
}
//format return type get request api 2
export interface challenge2 {
  key: string
  iv: string
  spell: string
} 
//format return type get request api 3
export interface challenge3 {
  wizardType: string;
  maze: string[][];
}

//format return type post request api 
export interface Keypart{
  "keyPart" : string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  baseURL:string = "https://exs-htf2022-api.azurewebsites.net/api/challenges/"

  constructor(private http:HttpClient) { }
  //challenge 1
  GetChallange1():Observable<challenge1>{
    const headers= new HttpHeaders()
      .set('Authorization', '016db3f4-8bf4-4685-a6e7-3ab0fb5f9f45');

    return this.http.get<challenge1>(this.baseURL+"azkaban",{ 'headers': headers });
  }

  PostChallange1(aplha:number ):Observable<any>{
    const headers= new HttpHeaders()
      .set('Authorization', '016db3f4-8bf4-4685-a6e7-3ab0fb5f9f45');
    return this.http.post(this.baseURL+"azkaban",{"answer": aplha},{ 'headers': headers });
  }


//challenge 2  
  GetChallange2():Observable<challenge2>{
    const headers= new HttpHeaders()
      .set('Authorization', '016db3f4-8bf4-4685-a6e7-3ab0fb5f9f45');

    return this.http.get<challenge2>(this.baseURL+"ministery-of-magic",{ 'headers': headers });
  }

  PostChallange2(spell:string ):Observable<any>{
    const headers= new HttpHeaders()
      .set('Authorization', '016db3f4-8bf4-4685-a6e7-3ab0fb5f9f45');
    return this.http.post(this.baseURL+"ministery-of-magic",{"answer": spell},{ 'headers': headers });
  }


  //challenge 3
  GetChallange3():Observable<challenge3>{
    const headers= new HttpHeaders()
      .set('Authorization', '016db3f4-8bf4-4685-a6e7-3ab0fb5f9f45');

    return this.http.get<challenge3>(this.baseURL+"room-of-requirement",{ 'headers': headers });
  }

  // PostChallange3(aplha:number ):Observable<any>{
  //   const headers= new HttpHeaders()
  //     .set('Authorization', '016db3f4-8bf4-4685-a6e7-3ab0fb5f9f45');
  //   return this.http.post(this.baseURL+"room-of-requirement",{"answer": aplha},{ 'headers': headers });
  // }
}
