import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../interfaces/Credentials';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private servicio:HttpClient) { }

  cargarDatos(Lista:Array<Credentials>){
    console.log(JSON.stringify(Lista));
  }
}