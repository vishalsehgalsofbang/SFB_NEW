import { Component } from '@angular/core';
import { DemoServiceService } from './demo-service.service';
import { Ng2GoogleChartsModule } from 'ng2-google-charts'; 
import { Observable } from 'rxjs';
import { reject } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public barChartData:any;
  public YearlyActiveCount:any= [];
  public YearlyActiveCount2:any= [30,60,100];
  constructor(public _demoService:DemoServiceService) { }

  getYearlyActiveContractsCount(){
    return new Promise((resolve, reject) => {
      this._demoService.getyearlyactivemanagers().subscribe(data => {
        this.YearlyActiveCount = data;
        console.log("Active Counts" + this.YearlyActiveCount)
      }, err => console.error(err),
        // the third argument is a function which runs on completion
        () => {
        
          let arr = {
            resp:[]
          }
          let arr2 = ['Name', 'Company'];
          
          //this.YearlyActiveCount.splice(0,0,arr2);
          //arr.resp.splice(1,0,this.YearlyActiveCount[1]);
          //arr.resp.splice(0,2,this.YearlyActiveCount[1]);

          //arr.resp.splice(0,1,this.YearlyActiveCount[0]);
          //arr.resp.splice(0,0,arr2);
         // arr.resp.splice(1,0,this.YearlyActiveCount[0]);
          
           this.YearlyActiveCount.splice(0,0,arr2);
           console.log("yaerly active responses",this.YearlyActiveCount);

          
          console.log("final arr"+ JSON.stringify(arr.resp));
          
           resolve(this.YearlyActiveCount);
          
        }
      )
    }).catch((error) => {
      reject(error);
      console.log('errorin getting data :', error);
    })

  }

 
  // getDefault(){
  //   this._demoService.getRootResponse().subscribe(data =>{
  //     console.log("in default method");
  //   })
  // }

   ngOnInit(){
  
    this.getYearlyActiveContractsCount().then((res: any) => {
      console.log("hi i am in getYearly method",res);
     // console.log("hi i am in getYearly method first index",res[1].rows);
      this.barChartData = {
        
        chartType: 'BarChart',
        dataTable: res,
        options: {
          title: 'Active Managers Counts', width: 900, height: 600, legend: { position: 'bottom' },
          series: {
            0: { color: '#c40bb9' },
            1: { color: '#c40bb8'}
          },
          tooltip: { isHtml: false }
        }
      }
     // this.drawchart(res);
    });
  }
     
}
