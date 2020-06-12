const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {

    const page = url.parse(req.url,true);
    let fileName = '.'+page.pathname;
    if(fileName=="./") fileName="./index.html";
    if(!fileName.endsWith('html'))fileName = fileName+".html";
    console.log(fileName);
    fs.readFile(fileName, function (error, data) {

        if(error){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end('404 not found');
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.write("File System Access Example!!!!!");
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log("Server is running on port 8080");