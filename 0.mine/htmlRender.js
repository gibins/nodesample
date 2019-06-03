
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

      if(req.url === '/home'){
	
		fs.readFile('./view/home.html',null,function(err, content){
		
			if(err){
			
				res.writeHead(404);
				res.write('Somthing Went Wrong');
				res.end();
			
			}else{
			
				res.writeHead(200);
				res.write(content);
				res.end();
			
			}
		
		
		});
	
	
	
	}
	else{
	
		res.writeHead(404);
		res.write('Error Page');
		res.end();
	
	}

});

server.listen(8000);
/// http://npmjs.com/package/express
