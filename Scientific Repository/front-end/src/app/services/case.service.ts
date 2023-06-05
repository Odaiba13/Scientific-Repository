import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Case } from '../interfaces/Case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

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

  GetCase():Observable<any>{
    return this.http.get(`${environment.hostname}/ListarCase`);
  }
  PostCase(lista:Case):Observable<any>{
    return this.http.post(`${environment.hostname}/InsertCase`,JSON.stringify({"casename":lista.casename ,"datacase":lista.datacase,"noncoplanar":lista.noncoplanar}),this.HttpUploadOptions);

  }
}
