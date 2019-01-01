var oracledb = require('oracledb');

oracledb.getConnection({
    user : "hr",
    password : "hr",
    connectString : "96.70.41.107:1521/orcl"
}, function(err, connection) {
    if (err) {
      console.error(err.message);
      return;
    }
   
});


//to get data format in key value pairs
oracledb.outFormat = oracledb.OBJECT;

// setting auto commit to true
oracledb.autoCommit = true;

