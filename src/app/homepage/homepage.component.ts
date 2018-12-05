import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { Router } from '@angular/router';
import { homePageDetails } from '../homPageDetails';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  name = ['DV','AB'];

  model = new homePageDetails(this.name);

  //msg:any;
  arr:any;
  //clicked = false;

  constructor(public hompageservice : HomepageService, private route: Router) { }

  onPageLoad(){
    console.log("Start");
    this.hompageservice.getHomePageDetails().subscribe((data:any) => {
     // let homepagedetailsRec = { };
       let resData = {
         "Response" : data.Response
       };
       
      
      console.log("Inside homepagedetailsRec",JSON.stringify(resData.Response));  
      for (var i in resData.Response ){
        console.log("inside loop", resData.Response[i]);
      }
       this.arr = resData.Response
      
    });
  }

  ngOnInit() {
    this.onPageLoad();

  }


}
