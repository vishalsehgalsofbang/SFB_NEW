import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginServiceService } from '../services/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwd = ['Really Smart', 'Super Flexible'];
   
  //detailsRec: any = {};


  model = new Login('fname.lname@example.com', this.pwd[0]);


  submitted = false;

  msg : any;

  constructor(public loginService : LoginServiceService, private route: Router) { 

  }

  onSubmit() {
    //console.log("insde function" + JSON.stringify(this.model.email));
    let jsonObj = {
      "email": this.model.email,
      "password": this.model.password
    };

    // calling the services methods getDetails() inside and wanted to do any sort of actions or decisions

    this.loginService.getDetails(jsonObj).subscribe((data: {}) => {
      //console.log(data);   // imnportant turning point
      
      let detailsRec = {
        "resp" : []
      };

      detailsRec.resp.push(data) ;

      console.log("Inside detailsRec",JSON.stringify(detailsRec));    
      // this.route.navigate(['/homepage']);    // after succesful login redirects to homepage 
    

    // console.log(data);  testing purpose
    
    if(detailsRec.resp[0].message=="login successfully"){
      console.log("inside if condition");
    //  detailsRec = data;    // data rec. in an obj known as detailsRec type of array. 
      
      this.route.navigate(['/homepage']);    // after succesful login redirects to homepage 

    }else{
     console.log("in else");
     // detailsRec = data;    // data rec. in an obj known as detailsRec type of array. 
      this.submitted = true;
      this.msg = detailsRec.resp[0].message;
      //this.route.navigate(['/login']);  // else redirect to a specific activity
      
      
      }
    
    });
  }

  ngOnInit() {


  }

}
