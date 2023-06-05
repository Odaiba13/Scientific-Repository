import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private servicio:HttpClient){}

  saveData(Lista:Array<User>){
    console.log(JSON.stringify(Lista));
  }
}  