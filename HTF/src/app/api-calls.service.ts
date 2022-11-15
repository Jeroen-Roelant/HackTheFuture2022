import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'mathjs';

export interface challenge1 {
  monsterHeight: number;
  monsterNeckDistance: number;
  heroDistanceFromMonster: number;
  heroWeaponHeight: number;
}
export interface Keypart{
  "keyPart" : string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  baseURL:string = "https://exs-htf2022-api.azurewebsites.net/api/challenges/"

  constructor(private http:HttpClient) { }

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
}
