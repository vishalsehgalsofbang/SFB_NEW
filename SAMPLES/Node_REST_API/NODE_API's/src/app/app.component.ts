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
  public lineChartData:any;
  public pieChartData:any;
  public YearlyActiveCount:any= [];
  public activeManagersCount:any=[];
  public managerListLineChart:any = [];
  public managerListPieChart:any = [];
  //public selectedItems = [];
  public YearlyActiveCount2:any= [30,60,100];
  public dropdownList = [];
  public dropdownSettings = {};
  public selectedManagers:any='';
  constructor(public _demoService:DemoServiceService) { }


  // public getYearlyActiveContractsCount(){
  //   return new Promise((resolve, reject) => {
  //     this._demoService.getyearlyactivemanagers().subscribe(data => {
  //       this.YearlyActiveCount = data;
  //       console.log("Active Counts" + this.YearlyActiveCount)
  //     }, err => console.error(err),
  //       // the third argument is a function which runs on completion
  //       () => {
        
  //         let arr = {
  //           resp:[]
  //         };

  //         let arr2 = ['Name', 'Company'];
          
  //          this.YearlyActiveCount.splice(0,0,arr2);
  //          console.log("yaerly active responses",this.YearlyActiveCount);

          
  //         console.log("final arr"+ JSON.stringify(arr.resp));
          
  //          resolve(this.YearlyActiveCount);
          
  //       }
  //     )
  //   }).catch((error) => {
  //     reject(error);
  //     console.log('errorin getting data :', error);
  //   })

  // }


  // binding data to charts via service
  public getManagersCount(){
    return new Promise((resolve, reject) => {
      this._demoService.getManagersCount().subscribe(data => {
        this.activeManagersCount = data;
        console.log("Managers Counts" + this.activeManagersCount)
      }, err => console.error(err),
        // the third argument is a function which runs on completion
        () => {
               let arr=[];
               //arr = this.activeManagersCount.resultset;
               let otherMGR_ID = '';
               let arr2 = ['MANAGERS NAME', 'EMPLOYEES COUNT'];

               //console.log("inside the array new",arr);
               for(let i in this.activeManagersCount.resultset){
                   let jsonObj = {
                     'FULL_NAME':this.activeManagersCount.resultset[i].MANAGER_NAME,
                     'COUNT': this.activeManagersCount.resultset[i].COUNTS
                   }
                //    let multiselectJSON ={
                //     'item_id': this.activeManagersCount.resultset[i].EMP_CODE,
                //      'item_text':this.activeManagersCount.resultset[i].MANAGER_NAME
                //    };
                
                  arr.push([this.activeManagersCount.resultset[i].MANAGER_NAME, this.activeManagersCount.resultset[i].COUNTS]);
                 
                //  this.dropdownList.push(multiselectJSON);

               }   

                arr.splice(0,0,arr2);
 
                 console.log("i am in final array",arr);     

                resolve(arr);

          
       }
      )
    }).catch((error) => {
      reject(error);
      console.log('errorin getting data :', error);
    });

   

 }


 // used for binding data to multiselect via service
 public getList(){
  return new Promise((resolve, reject) => {
    this._demoService.getManagersCount().subscribe(data => {
      this.activeManagersCount = data;
      console.log("Managers Counts" + this.activeManagersCount)
    }, err => console.error(err),
      () => {
           
             for(let i in this.activeManagersCount.resultset){
               
                 let multiselectJSON ={
                  'item_text': this.activeManagersCount.resultset[i].MANAGER_NAME,
                   'item_id':this.activeManagersCount.resultset[i].EMP_CODE
                 };
              
               
              this.dropdownList.push(multiselectJSON);
              console.log("updated multiselect json",multiselectJSON);

             }   

          

              resolve(this.dropdownList);

        
     }
    )
  }).catch((error) => {
    reject(error);
    console.log('errorin getting data :', error);
  });

}

 // used for re drawing the charts after the multiselect options are clicked a redraw is required Chart number 2
 public drawchart1(res) {
  this.lineChartData = {
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
 }

  // used for re drawing the charts after the multiselect options are clicked a redraw is required Chart number 3
 public drawchart2(res) {
  this.managerListPieChart = {
    chartType: 'PieChart',
    dataTable: res,
    options: {
      title: 'Employees Count', width: 900, height: 600, legend: { position: 'bottom' },
      pieHole: 0.4,
      series: {
        0: { color: '#c40bb9' },
        1: { color: '#c40bb8'}
      },
      tooltip: {isHtml:true}

    }
  }
 }



   ngOnInit(){
  
    // this.getYearlyActiveContractsCount().then((res: any) => {
    //   console.log("hi i am in getYearly method",res);
    //  // console.log("hi i am in getYearly method first index",res[1].rows);
    //   this.barChartData = {
        
    //     chartType: 'BarChart',
    //     dataTable: res,
    //     options: {
    //       title: 'Active Managers Counts', width: 900, height: 600, legend: { position: 'bottom' },
    //       series: {
    //         0: { color: '#c40bb9' },
    //         1: { color: '#c40bb8'}
    //       },
    //       tooltip: { isHtml: false }
    //     }
    //   }
    //  // this.drawchart(res);
    // });

    this.getManagersCount().then((res:any) => {
      console.log("hi i am in getManagersCount", res);
      this.lineChartData = {
        chartType: 'BarChart',
        dataTable:res,
        options:{
          title:'Employees Count',
          width: 900,
          height: 600,
          legend: { position: 'bottom' },
          series:{
            0: { color: '#c40bb9' },
            1: { color: '#c40bb8'}
          },
          tooltip: {isHtml:true}
        }
      }
      
    });

    this.getManagersCount().then((res:any) => {
      console.log("hi i am in getManagersCount", res);
      this.pieChartData = {
        chartType: 'PieChart',
        dataTable:res,
        options:{
          title:'Employees Count',
          width: 900,
          height: 600,
          pieHole: 0.4,
          legend: { position: 'bottom' },
          series:{
            0: { color: '#c40bb9' },
            1: { color: '#c40bb8'}
          },
          tooltip: {isHtml:true}
        }
      }
    });


    // invoking the data from getLIst method
    this.getList().then((res:any) => {
     console.log("inside the select dropdown list",res);
     // setting the response in piecharts and barcharts multiselect
     this.managerListLineChart = res;
     this.managerListPieChart = res;
     console.log("inside the managersListLine Chart data",this.managerListLineChart);
    });

  
 


    
    // settings for dropdown or multiselect 
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      dir:'asc'
    };

     
   

    // this.selectedItems = [
    //   {  item_text: this.activeManagersCount.resultset[0].MANAGER_NAME, item_id:this.activeManagersCount.resultset[0].EMP_CODE}
    // ];


   }


   onItemSelect(item:any){
    console.log("inside the item",JSON.stringify(this.activeManagersCount.resultset));
    var res = this.activeManagersCount.resultset.filter(items => {
      console.log("items",items);
      return items.EMP_CODE == item.item_id && items.MANAGER_NAME == item.item_text
      
    });
    
    console.log("new val",res);
    
    let valTitiles = ['MANAGERS NAME', 'EMPLOYEES COUNT' ];
    let val = [];
    let newarr = [res[0].MANAGER_NAME, res[0].COUNTS];
    val.push(newarr);
    val.splice(0,0,valTitiles);
    console.log("inside the json string",val);
    
    this.drawchart1(val);
     
    }

  //   OnItemDeSelect(item:any){
  //     console.log(item);
  //     console.log(this.selectedItems);
  // }

  onManagerSelect(item:any){
   console.log("inside the pie json",JSON.stringify(this.activeManagersCount.resultset));
   var res = this.activeManagersCount.resultset.filter(items => {
    console.log("items",items);
    return items.EMP_CODE == item.item_id && items.MANAGER_NAME == item.item_text
   
  });

  console.log("new val",res);
    
    let valTitiles = ['MANAGERS NAME', 'EMPLOYEES COUNT' ];
    let val = [];
    let newarr = [res[0].MANAGER_NAME, res[0].COUNTS];
    val.push(newarr);
    val.splice(0,0,valTitiles);
    console.log("inside the json string",val);
    
    this.drawchart2(val);

  }












     
}
