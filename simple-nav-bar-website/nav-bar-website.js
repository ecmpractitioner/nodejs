
const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer(function (req, res) {

    const page = url.parse(req.url, true);
    let fileName = "." + page.pathname;
    if (fileName == "./") fileName = "./index.html";
    if (!fileName.endsWith("html")) fileName = fileName + ".html";
    console.log(fileName);
    fs.readFile(fileName, function (err, data) {

        if (err) {
            res.writeHead(400, {
                'Content-Type': 'text/html'
            });
            return res.end("Sorry something went wrong. We are working on the fix");
        }

        res.writeHead(200, {
            'Contnet-Type': 'text/html'
        });
        res.write(data);
        return res.end();

    });

}).listen(8080);