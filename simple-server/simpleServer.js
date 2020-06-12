const http = require('http');
const url = require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Hello World from simple server</h1>');
    res.write(req.url);
    const q = url.parse(req.url,true).query;
    //res.write(q);
    res.write("\n");
    res.write("Date is "+q.date+" and month is "+q.month);
    res.end();

}).listen(8080);