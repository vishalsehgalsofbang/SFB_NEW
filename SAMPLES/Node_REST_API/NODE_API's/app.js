const express = require('express');
const app = express();
const parser = require('body-parser');
const morgan = require('morgan');
var oracledb = require('oracledb');
var dbconfig = require('./dbconfig');
var cors = require('cors');

app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

var dbconf_ele =  {
  user          : dbconfig.user,
  password      : dbconfig.password,
  connectString : dbconfig.connectString
};

// seeting root routes of an app
app.get("/", (req, res) => {
    console.log("Entered the Root Routes Now");
    res.send("Hey Pls check and Validate");

});

// API for barcharts
app.get("/barChartdata", (req, res) =>{
    oracledb.getConnection(
      dbconf_ele,
        function(err, connection) {
          if (err) {
            console.error(err.message);
            return;
          }
          connection.execute(`SELECT FULL_NAME, COUNT(DISTINCT(EMP_CODE)) AS COUNT_ACTIVE_MANGERS
                              FROM TBL_EMPLOYEE
                              WHERE IS_MANAGER = 'Y'
                              GROUP BY FULL_NAME`,
          function(err, result) {
            if (err) {
              console.error(err.message);
              doRelease(connection);
               return;
            }
            //res.set('Content-Type', 'aaplication/json');
            //res.json({result});
            res.send(result.rows);
            console.log(result);
            doRelease(connection);
          });
         
        });

        function doRelease(connection) {
            connection.close(
              function(err) {
                if (err)
                  console.error(err.message);
              });
          }
        
      // res.send(result.rows);

    
        
});

// API for lineCharts
app.get("/lineChartdata", (req, res) =>{
   oracledb.getConnection(
     dbconf_ele,
        function(err, connection){
          if(err){
            console.error(err.message);
            return;
          }
          connection.execute(`
          SELECT emp.EMP_CODE, empl.FULL_NAME as MANAGER,
          emp.MGR_ID
          FROM  TBL_EMPLOYEE emp, TBL_EMPLOYEE empl
          WHERE emp.MGR_ID = empl.EMP_CODE` ,
          function(err, result){
            if(err){
              console.error(err.message);
              doRelease(connection);
              return;
            }
            res.send(result.rows);
            console.log(result);
            doRelease(connection);
          });
        });
        function doRelease(connection){
          connection.close(function(err){
            if(err)
            console.error(err.message);
          });
      } 


});


// SAMPLE LOGIN API
app.get("/loginValidate", (req, res) => {
  oracledb.getConnection(
    dbconf_ele,
     function(err, connection){
       if(err){
         console.error(err.message);
         return;
       }
       connection.execute(`SELECT EMP_CODE,FULL_NAME, MGR_ID, ROLE_ID
                           FROM TBL_EMPLOYEE
                           WHERE EMAIL ='vivek@sofbang.com'
                           AND 
                           PWD = 'vivek@12345' `,
        function(err, result){
         if(err){
           console.error(err.message);
           doRelease(connection);
           return;
         }
         res.send(result.rows);
         doRelease(connection);
       });
     });

     function doRelease(connection){
       connection.close(
         function(err){
           if(err)
           console.log(err.message);
         });

     }

});


// SAMPLE ADDING AN EMPLOYEE API
app.get("/addEmployee", (req, res) => {
  oracledb.getConnection(
    dbconf_ele,
     function(err, connection){
       if(err){
         console.error(err.message);
         return;
       }
       connection.execute(`INSERT INTO TBL_EMPLOYEE(ROLE_ID,FULL_NAME,EMAIL,PHONE,DOB,JOIN_DATE,ADDRESS,MGR_ID,PWD,ALLOWED_LEAVES,LAST_COMPANY_NAME,IS_MANAGER,SAL)
                           VALUES(1,'Vishal Sehgal','vishalsehgal@sfb.com ',9990008889,'20-DEC-1990','20-DEC-2017','New Delhi',7,'vishal@12345',06,'ORANGE MANTRA','N',20000) `,
        function(err, status){
         if(err){
           console.error(err.message);
           doRelease(connection);
           return;
         }
         res.sendStatus(status);
         console.log(status);
         doRelease(connection);
       });
     });

     function doRelease(connection){
       connection.close(
         function(err){
           if(err)
           console.log(err.message);
         });

     }

});



app.listen(3003, () => {
    console.log("Server is Up and Listening on 3003....");
});



