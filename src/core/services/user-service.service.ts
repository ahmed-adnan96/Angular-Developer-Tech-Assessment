import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments/enviroment';
import { User } from '../interfaces/user';
import { UserDetails } from '../interfaces/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _HttpClient:HttpClient) { }


  getUsers():Observable<User[]>{
    return this._HttpClient.get<User[]>(`${enviroment.baseUrl}/${enviroment.users}`);
  }

  getUserById(id:number):Observable<UserDetails>{
      return this._HttpClient.get<UserDetails>(`${enviroment.baseUrl}/${enviroment.users}/${id}`)
  }



}
