/*var http = require('http');
var mysql = require('mysql');

var status_msg="No Update";


var con = mysql.createConnection({
  host: "localhost",
  user: "mysql",
  password: "mysql"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  status_msg = "Connected";
});
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! '+status_msg);
}).listen(8080);

*/







