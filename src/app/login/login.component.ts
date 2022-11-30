import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder,private http:HttpClient,public loginService:LoginService,private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(data:any){
    this.loginService.loginForm(data) 
    .subscribe(res=>{
      console.log("result"+res);
      alert("Login is successfull");
      this.loginForm.reset();
      this.router.navigate(['home']);
    },err=>{
      alert("Something went wrong");
    })
  }
}
