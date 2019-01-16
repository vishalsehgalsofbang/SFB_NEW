import { Component } from '@angular/core';
import { DemoServiceService } from './demo-service.service';
import { reject } from 'q';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public barChartData:any;
  public pieChartData:any;
  public gaugeChartData:any;
  public activeManagersCount:any=[];
  public managerListLineChart:any = [];
  public managerListPieChart:any = [];
  public managerListGaugeChart:any = [];
  public selectedItems = [];
  public dropdownList = [];
  public dropdownSettings = {};

  constructor(public _demoService:DemoServiceService) { }


  // binding data to charts via service
  public getManagersCount(){
    return new Promise((resolve, reject) => {
      this._demoService.getManagersCount().subscribe(data => {
        this.activeManagersCount = data;
        console.log("Managers Counts" + this.activeManagersCount)
      }, err => console.error(err),
        () => {
               let arr=[];
               let otherMGR_ID = '';
               let arr2 = ['MANAGERS NAME', 'EMPLOYEES COUNT'];

               for(let i in this.activeManagersCount.resultset){
                   let jsonObj = {
                     'FULL_NAME':this.activeManagersCount.resultset[i].MANAGER_NAME,
                     'COUNT': this.activeManagersCount.resultset[i].COUNTS
                   }
              
                
                  arr.push([this.activeManagersCount.resultset[i].MANAGER_NAME, this.activeManagersCount.resultset[i].COUNTS]);
                 

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


 public handleChartData(res:any){
   console.log("the data recieved as under:",JSON.stringify(res));
   let valTitiles = ['MANAGERS NAME', 'EMPLOYEES COUNT' ];
   let local = [];
   let anaar = [];
   let bnaar = [];
   let storeresultsarray = [];
   storeresultsarray = this.activeManagersCount.resultset;
   console.log("the if in case is length is :",storeresultsarray.length)
   if(res.length == 0){
     console.log("the if in case is length is :",storeresultsarray.length)
    for(let k in storeresultsarray){
    
      bnaar.push([storeresultsarray[k].MANAGER_NAME, storeresultsarray[k].COUNTS])


    }
  

    bnaar.splice(0,0,valTitiles);
    console.log("the after spliced results are :",bnaar);
    this.drawchart1(bnaar);
    
   
   }else{   
    console.log("the selected lsit is ",storeresultsarray);
    for(let i in storeresultsarray){
      console.log("insde the for loop :",JSON.stringify(storeresultsarray))
      for(let j in res){
        console.log("inside the second for loop",j,res)
       if(storeresultsarray[i].EMP_CODE == res[j].item_id){
         console.log("the matched records are as under",storeresultsarray[i].EMP_CODE == res[j].item_id)
         local = [storeresultsarray[i].MANAGER_NAME, storeresultsarray[i].COUNTS]
         anaar.push(local)
       }else{
         console.log("inside the else condition")
       }
     }
 
   }

   console.log("after all loops and all the data is:", anaar);

   anaar.splice(0,0,valTitiles);
   console.log("the spliced final data is :",anaar);


   this.drawchart1(anaar);

   }

 
    
  


}


 public handlePieChartData(res:any){
  console.log("the data recieved as under:",JSON.stringify(res));
   let valTitiles = ['MANAGERS NAME', 'EMPLOYEES COUNT' ];
   let local = [];
   let anaar = [];
   let bnaar = [];
   let storeresultsarray = [];
   storeresultsarray = this.activeManagersCount.resultset;
   console.log("the if in case is length is :",storeresultsarray.length)
   if(res.length == 0){
     console.log("the if in case is length is :",storeresultsarray.length)
    for(let k in storeresultsarray){
     
      bnaar.push([storeresultsarray[k].MANAGER_NAME, storeresultsarray[k].COUNTS])


    }
   

    bnaar.splice(0,0,valTitiles);
    console.log("the after spliced results are :",bnaar);
    this.drawchart2(bnaar);
    
   
   }else{   
    console.log("the selected lsit is ",storeresultsarray);
    for(let i in storeresultsarray){
      console.log("insde the for loop :",JSON.stringify(storeresultsarray))
      for(let j in res){
        console.log("inside the second for loop",j,res)
       if(storeresultsarray[i].EMP_CODE == res[j].item_id){
         console.log("the matched records are as under",storeresultsarray[i].EMP_CODE == res[j].item_id)
         local = [storeresultsarray[i].MANAGER_NAME, storeresultsarray[i].COUNTS]
         anaar.push(local)
       }else{
         console.log("inside the else condition")
       }
     }
 
   }

   console.log("after all loops and all the data is:", anaar);

   anaar.splice(0,0,valTitiles);
   console.log("the spliced final data is :",anaar);


   this.drawchart2(anaar);

   }

 }

public handleGaugeChartData(res:any){
  console.log("the data recieved as under:",JSON.stringify(res));
   let valTitiles = ['MANAGERS NAME', 'EMPLOYEES COUNT' ];
   let local = [];
   let anaar = [];
   let bnaar = [];
   let storeresultsarray = [];
   storeresultsarray = this.activeManagersCount.resultset;
   console.log("the if in case is length is :",storeresultsarray.length)
   if(res.length == 0){
     console.log("the if in case is length is :",storeresultsarray.length)
    for(let k in storeresultsarray){
    
      bnaar.push([storeresultsarray[k].MANAGER_NAME, storeresultsarray[k].COUNTS])


    }


    bnaar.splice(0,0,valTitiles);
    console.log("the after spliced results are :",bnaar);
    this.drawchart3(bnaar);
    
   
   }else{   
    console.log("the selected lsit is ",storeresultsarray);
    for(let i in storeresultsarray){
      console.log("insde the for loop :",JSON.stringify(storeresultsarray))
      for(let j in res){
        console.log("inside the second for loop",j,res)
       if(storeresultsarray[i].EMP_CODE == res[j].item_id){
         console.log("the matched records are as under",storeresultsarray[i].EMP_CODE == res[j].item_id)
         local = [storeresultsarray[i].MANAGER_NAME, storeresultsarray[i].COUNTS]
         anaar.push(local)
       }else{
         console.log("inside the else condition")
       }
     }
 
   }

   console.log("after all loops and all the data is:", anaar);

   anaar.splice(0,0,valTitiles);
   console.log("the spliced final data is :",anaar);


   this.drawchart3(anaar);

   }


}


 
 // used for binding data to multiselect dropdown via service
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
                  'item_id':this.activeManagersCount.resultset[i].EMP_CODE,
                  'emp_count':this.activeManagersCount.resultset[i].COUNTS
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

 // used for re drawing the charts after the multiselect options are clicked a redraw is required Chart number 1
 public drawchart1(res) {
   console.log("the data",JSON.stringify(res))
  this.barChartData = {
    chartType: 'BarChart',
    dataTable: res,
    options: {
      title: 'Active Managers Counts', width: 900, height: 500, legend: { position: 'bottom' },
      series: {
        0: { color: '#c40bb9' },
       1: { color: '#c40bb8'}
      },
      tooltip: { isHtml: false }

    }
  }
 }

  // used for re drawing the charts after the multiselect options are clicked a redraw is required Chart number 2
 public drawchart2(res) {
   console.log("the data in pie charts are as under:",JSON.stringify(res))
  this.pieChartData = {
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

   // used for re drawing the charts after the multiselect options are clicked a redraw is required Chart number 3
 public drawchart3(res) {
   console.log("the data rec in gauges are as follows:",JSON.stringify(res))
  this.gaugeChartData = {
    chartType: 'Gauge',
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

    

    this.getManagersCount().then((res:any) => {
      console.log("hi i am in getManagersCount", res);
      this.barChartData = {
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

    this.getManagersCount().then((res:any) => {
      console.log("hi i am in getManagersCount", res);
      this.gaugeChartData = {
        chartType: 'Gauge',
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
     this.managerListGaugeChart =res;
     console.log("inside the managersListLine Chart data",this.managerListLineChart);
    });



    // settings for dropdown or multiselect 
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true,
      dir:'asc'
    };

   
   }
   
   // bar charts filters events
   onItemSelect(item:any){
     let final = [];
    //  this.selectedItems = [];
     console.log("items are as under",JSON.stringify(item));
     console.log("the selectedItems are as under:",JSON.stringify(this.selectedItems));
     this.selectedItems.push(item);
     console.log("the selectedItems after the push are  as under:",JSON.stringify(this.selectedItems));

     this.handleChartData(this.selectedItems);
     
   }
   
   onItemSelectAll(item:any){
     console.log("the selected list of items are as follows:", item);
     this.selectedItems = [];
     console.log("the selectedItems are as under: ", this.selectedItems);
     this.selectedItems =item;
     console.log("the final data before sending it to the handler method is as follows:",this.selectedItems);
     this.handleChartData(item);

   }

   OnItemDeSelect(item:any){
     console.log("the item to be sliced is as follows:", item);
     console.log("the selectedItems list is as under:", JSON.stringify(this.selectedItems));
     for(let i in this.selectedItems){
       console.log("inside the first ith loop first loop",i,JSON.stringify(this.selectedItems))
        console.log("inside the second jth for loop first loop",JSON.stringify(item))
         if(this.selectedItems[i].item_id == item.item_id){
           console.log("inside the if conditions :",this.selectedItems[i].item_id == item.item_id,i)
           var pos = JSON.parse(i)
           console.log("the pos is ",pos)
           this.selectedItems.splice(pos,1)
           console.log("the spliced resultant array is:",this.selectedItems)
         }
         console.log("after the if is finished")
     }
     console.log("after the first ith for loop", this.selectedItems)
     this.handleChartData(this.selectedItems);

   }


   onItemDeSelectAll(items: any){
     console.log("items are as follows :",items);
     this.selectedItems = [];
   
     this.handleChartData(items);
  
}

    // pie charts filters events
     onPieItemSelect(item:any){
        let final = [];
       console.log("the pie charts items are",JSON.stringify(item));
     console.log("the selectedItems are as under:",JSON.stringify(this.selectedItems));
     this.selectedItems.push(item);
     console.log("the pie chart selectedItems after the push are  as under:",JSON.stringify(this.selectedItems));

     this.handlePieChartData(this.selectedItems);

     }

     onPieItemSelectAll(item:any){
      console.log("the selected pie chart list of items are as follows:", item);
      this.selectedItems = [];
      console.log("the piechart selectedItems are as under: ", this.selectedItems);
      this.selectedItems =item;
      console.log("the pie chart final data before sending it to the handler method is as follows:",this.selectedItems);
      this.handlePieChartData(item);
      }

     OnPieItemDeSelect(item:any){
      console.log("the item to be sliced is as follows:", item);
      console.log("the selectedItems list is as under:", JSON.stringify(this.selectedItems));
      for(let i in this.selectedItems){
        console.log("inside the first ith loop first loop",i,JSON.stringify(this.selectedItems))
         console.log("inside the second jth for loop first loop",JSON.stringify(item))
          if(this.selectedItems[i].item_id == item.item_id){
            console.log("inside the if conditions :",this.selectedItems[i].item_id == item.item_id,i)
            var pos = JSON.parse(i)
            console.log("the pos is ",pos)
            this.selectedItems.splice(pos,1)
            console.log("the spliced resultant array is:",this.selectedItems)
          }
          console.log("after the if is finished")
      }
      console.log("after the first ith for loop", this.selectedItems)
      this.handlePieChartData(this.selectedItems);

      }

      onPieItemDeSelectAll(item:any){
        console.log("items are as follows :",item);
        this.selectedItems = [];
      
        this.handlePieChartData(item);
     }


    //  // gauges events 
     onGauageItemSelect(item:any){
      let final = [];
      console.log("the gauge charts items are",JSON.stringify(item));
    console.log("the gauge selectedItems are as under:",JSON.stringify(this.selectedItems));
    this.selectedItems.push(item);
    console.log("the gauge charts selectedItems after the push are  as under:",JSON.stringify(this.selectedItems));

    this.handleGaugeChartData(this.selectedItems);

     }


     onGaugeItemSelectAll(item:any){
      console.log("the selected pie chart list of items are as follows:", item);
      this.selectedItems = [];
      console.log("the piechart selectedItems are as under: ", this.selectedItems);
      this.selectedItems =item;
      console.log("the pie chart final data before sending it to the handler method is as follows:",this.selectedItems);
      this.handleGaugeChartData(item);
     }


     OnGaugeItemDeSelect(item:any){
      console.log("the item to be sliced is as follows:", item);
      console.log("the selectedItems list is as under:", JSON.stringify(this.selectedItems));
      for(let i in this.selectedItems){
        console.log("inside the first ith loop first loop",i,JSON.stringify(this.selectedItems))
         console.log("inside the second jth for loop first loop",JSON.stringify(item))
          if(this.selectedItems[i].item_id == item.item_id){
            console.log("inside the if conditions :",this.selectedItems[i].item_id == item.item_id,i)
            var pos = JSON.parse(i)
            console.log("the pos is ",pos)
            this.selectedItems.splice(pos,1)
            console.log("the spliced resultant array is:",this.selectedItems)
          }
          console.log("after the if is finished")
      }
      console.log("after the first ith for loop", this.selectedItems)
      this.handleGaugeChartData(this.selectedItems);

     }

     onGaugeItemDeSelectAll(item:any){
      console.log("items are as follows :",item);
      this.selectedItems = [];
    
      this.handleGaugeChartData(item);
     }

}
