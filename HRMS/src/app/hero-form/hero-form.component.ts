import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { LoginService } from '../Services/login.service';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  pwd = ['Really Smart', 'Super Flexible'];
   


  model = new Hero(18, 'fname.lname@example.com', this.pwd[0], 'Chuck Overstreet');

  submitted = false;

  // loginService: LoginService;
  // onSubmit(event:any)
  //  { 
  //   this.submitted = true; 
  //   console.log(event.target.value);
  // }


  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

  constructor(public loginService: LoginService) {
    //this.notifier = notifier;
   }

  //  public showNotification( type: string, message: string ): void {
	// 	this.notifier.notify( type, message );
	// }

   onSubmit() {
    //console.log("insde function" + JSON.stringify(this.model.email));
    let jsonObj = {
      "email": this.model.email,
      "password": this.model.password
    };
    // calling the services here with getDetails() inside and wanted to do any sort of animations we can

    this.loginService.getDetails(jsonObj).subscribe((data: {}) => {

      // Checking if the data returned is not null and showing that data to the next activity
      // which can perform some succesfull animations related to success or fail on the basis of error codes returning by HTTP Standarads
      // using angular - notifier

      //this.showNotification('error', 'Successfully Logged In.' );

      //console.log(data);
      // this.jsonObj = data;
    });
  }
  ngOnInit() {
    //this.getDetails();
    //  this.onSubmit(); 

  }

}
