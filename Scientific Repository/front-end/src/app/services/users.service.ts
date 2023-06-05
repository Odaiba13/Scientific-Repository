import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

  GetUser():Observable<any>{
    return this.http.get(`${environment.hostname}/ListarUser`);
    
  }
  PostUser(lista:User):Observable<any>{
    return this.http.post(`${environment.hostname}/InsertUser`,JSON.stringify({"username":lista.username ,"userpassword":lista.userpassword,"email":lista.email,"charge":lista.charge}),this.HttpUploadOptions);

  }


}
