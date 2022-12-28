var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);
