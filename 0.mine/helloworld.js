setTimeout(function(){

console.log("world");

}, 2000);
console.log("hello");


add = function (a,b){
	console.log(a+b);
}

add(2,3);

/*
 *server with node
 */


/*var http = require('http');
var server = http.createServer(function(req,res){
	console.log(res.statusCode);
	console.log('REQUEST DATA '+req);
	res.writeHead(200, {'content-type':'text/plain'});
	//res.write('hello there');

	
	//asynchronus , event queue
	setTimeout(function(){
			res.end('timeout completed');
	},3000);

	res.write('hello there');
	res.end();

});*/


//server.listen(8000);

/*
 *node js single threded applkication (event queue)
 *
 */

/*
 *TCP Server
 socket server with chat
 */

var net = require('net');

var socket_store = net.createServer(function(socket){
	socket.write('hello');
	socket.write('there');
	socket.on('data', function(data){
		console.log(data.toString());
		socket.write(data.toString());
	});

});

socket_store.listen(8001);





