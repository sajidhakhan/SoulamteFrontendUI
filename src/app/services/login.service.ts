import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  loginForm(login:Login){
    return this.http.post<Login>('http://localhost:8080/api/v1/login',login);
  }
}
