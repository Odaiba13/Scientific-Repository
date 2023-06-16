import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Alg } from '../interfaces/Alg';

@Injectable({
  providedIn: 'root'
})
export class AlgService {

  constructor(private http:HttpClient) { }

  HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
    }
    ),
  };

  GetAlg():Observable<any>{
    return this.http.get(`${environment.hostname}/ListarAlg`);
  }
  PostAlg(lista:Alg):Observable<any>{
    return this.http.post(`${environment.hostname}/InsertAlg`,JSON.stringify({"algorithminfo":lista.algorithminfo ,"algorithmfile":lista.algorithmfile}),this.HttpUploadOptions);

  }
}