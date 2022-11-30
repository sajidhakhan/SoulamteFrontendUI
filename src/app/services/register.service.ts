import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  signupForm(register:Register){
    return this.http.post<Register>('http://localhost:8080/api/v1/user',register);
}
}
