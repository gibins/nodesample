let sockets = [];

var net = require('net');
var fs = require('fs');

var socket_store = net.createServer(function(socket){
	
	socket.write("Socket Started");
	sockets.push(socket);

	socket.on('data', function(data){

			//datasockets
		//dont send same socket
		sockets.forEach((s)=>{
		s.write(data);
		
		});
	});

});

socket_store.listen(8000);
