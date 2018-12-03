import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { LoginService } from '../Services/login.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  pwd = ['Really Smart', 'Super Flexible'];
   
  detailsRec: any = [];

  formControl: FormControl ;

  model = new Hero(18, 'fname.lname@example.com', this.pwd[0], 'Chuck Overstreet');

  submitted = false;

  
  constructor(public loginService: LoginService) {
    
   }

  
   onSubmit() {
    //console.log("insde function" + JSON.stringify(this.model.email));
    let jsonObj = {
      "email": this.model.email,
      "password": this.model.password
    };

    // calling the services here with getDetails() inside and wanted to do any sort of animations we can

    this.loginService.getDetails(jsonObj).subscribe((data: {}) => {
    this.detailsRec = [];
    //  console.log(data);  testing purpose
    if(this.detailsRec === ''){
      
      this.detailsRec = data;    // data rec. in an obj known as detailsRec type of array. 
                                 // printing sucess alerts 
    }else() => {
      
      this.detailsRec = data;    // data rec. in an obj known as detailsRec type of array. 
                                 // printing fail alerts

    }
    
    });
  }
  ngOnInit() {
    //this.getDetails();
    //  this.onSubmit(); 

  }

}
