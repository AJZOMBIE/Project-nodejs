var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "10.0.0.27",
  user: "mvhub",
  password: "@Mvtv1234",
  database: "reSync"
});

var fs = require('fs');

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO table_name (id, channel_name) VALUES ?";
  // var values = [
  //   ['John', 'Highway 71'],
  //   ['Peter', 'Lowstreet 4'],
  //   ['Amy', 'Apple st 652'],
  //   ['Hannah', 'Mountain 21'],
  //   ['Michael', 'Valley 345'],
  //   ['Sandy', 'Ocean blvd 2'],
  //   ['Betty', 'Green Grass 1'],
  //   ['Richard', 'Sky st 331'],
  //   ['Susan', 'One way 98'],
  //   ['Vicky', 'Yellow Garden 2'],
  //   ['Ben', 'Park Lane 38'],
  //   ['William', 'Central st 954'],
  //   ['Chuck', 'Main Road 989'],
  //   ['Viola', 'Sideway 1633']
  // ];
  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',(req,res)=>{
  console.log(req.body)
  let sql = "INSERT INTO table_name (id, channel_name) VALUES (?,?);"
  con.query(sql, [req.body.txtCountDB27,req.body.txtDB27], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  res.status(200)
})
module.exports = router;
