import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder , private http:HttpClient, private router: Router,public registerService: RegisterService) {}
  
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      Name:[''],
      Age:[''],
      City:[''],
      email:[''],
      password:[''],
      GENDER:['']
  })
  }
  signUp(data:any){
    this.registerService.signupForm(data) 
    .subscribe(res=>{
      console.log("result"+res);
      alert("Signup is successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong");
    })
  }
}
