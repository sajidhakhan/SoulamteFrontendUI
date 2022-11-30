import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-soulmate-profile',
  templateUrl: './soulmate-profile.component.html',
  styleUrls: ['./soulmate-profile.component.css']
})
export class SoulmateProfileComponent implements OnInit {
  // private cookieValue_jwt : string;
  // helper=new JwtHelperService();
  user_id="";
  user: any=new User();
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  interests: String[] = [
    
  ];

  qualifications: String[] = [

  ];
  userName: any;
  picture: any;

  addInterest(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.interests.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeInterest(interest: String): void {
    const index = this.interests.indexOf(interest);

    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }

  addQualification(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.qualifications.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeQualification(qualification: String): void {
    const index = this.qualifications.indexOf(qualification);

    if (index >= 0) {
      this.qualifications.splice(index, 1);
    }
  }

  prettyProfile(){
    // this.router.navigateByUrl('/home/profile');
    this.dialogRef.closeAll();
    window.location.reload();
  }

  constructor( private router: Router, private dialogRef:MatDialog) { 
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {

  //   this.cookieValue_jwt = this.cookieService.get('JWT-TOKEN');
  //   console.log("cookie value is = ",this.cookieValue_jwt);
  //   this.getDecodedAndgetuserName();
  //   console.log(this.userName);

  //   this.getUserData();
  // }

  // getDecodedAndgetuserName(){
  //   const decodedToken=this.helper.decodeToken(this.cookieValue_jwt);
  //     this.userName=decodedToken.username;

      //this.userPicture=decodedToken.pic;
      // console.log(this.userName);
      // console.log(this.userPicture);
      // if(decodedToken.pic == undefined || decodedToken.pic == "" || decodedToken.pic == null){
      //   this.userPicture="assets/user.svg";
      // }else{
      //  this.userPicture=decodedToken.pic;
      // }
  //  }

  

   getUserData(){
     this.service.getUserData(this.userName).subscribe(
       (data)=>{console.log(data);
        this.user.name=data.name;
         this.user.emailid=data.emailid;
         if(data.phoneNo!=null){
           this.user.phoneNo=data.phoneNo;
         }                 
         if(data.address!=null){
          this.user.address=data.address;
        }  
        if(data.dob!=null){
          this.user.dob=data.dob;
        }  
        if(data.gender!=null){
          this.user.gender=data.gender;
        }  
        if(data.interests!=null){
          this.interests=data.interests;
        }
        if(data.qualifications!=null){
          this.qualifications=data.qualifications;
        }
       },
       (error)=>{console.log(error)}
     )

   }

  updateUser(update: any) {
    update.value.interests=this.interests;
    update.value.qualifications=this.qualifications;
    update.value.user_id=this.user_id;
    update.value.emailid=this.user.emailid;
    update.value.username=this.user.emailid;
    this.service.updateUser(update.value).subscribe(data => {
      console.log(data);
    })
    
 
 console.log(update.value)
}

}