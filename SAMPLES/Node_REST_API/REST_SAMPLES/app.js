const express = require('express');
const app = express();
const morgan = require('morgan');
var dbconfig = require('./dbconfig');
const bodyParser = require('body-parser');
app.use(morgan('combined'));


// PostgreSQL node package import or inclusion
// const { Client } = require('pg');
// const client = new Client();

// client.connect();

// client.query('SELECT $1::text as message ',['Hello World!'], (err, res) =>{
//     console.log(err ? err.stack :res.rows[0].message);
//     client.end();
// });


// setting root routes in node
app.get("/", (req,res) => {
    console.log("Responding to the Root route");
    res.send("Hey There Hope you are well");
});

// creating first express API returns a 2 objects of users(static data) that are user1 and user2
app.get("/users", (req,res) => {
    var user1 = {
        firstName: "Stephen",
        lastName: "Curry"
    };
    const user2 = {
        firstName: "Adam",
        lastName: "Bonanza"
    };
    res.json([user1, user2]);
    //res.send("Modemon auto updates when i save this file");

});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// actual login API's with dynamic data from Oracle DB
app.get("/loginValidate", (req, res) => {
    
    connection.getConnection((oracledb) => {

        oracledb.execute(`SELECT Emp_Code, Role_ID FROM  TBL_EMPLOYEE WHERE Email = req.body.email AND Pwd = req.body.pwd;`,function (err, result) {

            if (err) {
            
            conn.closeConnection(db);
            
            return next(err);
            
            }

            res.data = result.rows;

            res.message = "Logged In successully"

            res.json(response);

           conn.closeConnection(db);

        });
        
    });


    //  const query = (['SELECT Emp_Code, Role_ID FROM  TBL_EMPLOYEE WHERE Email = req.body.email AND Pwd = req.body.pwd;'],["successful"]);
    //  res.send(query);


});

// listening to port setting it explicitly @localhost:3003
app.listen(3003, () => {
    console.log("Server is Up and Listening on 3003....");
});
