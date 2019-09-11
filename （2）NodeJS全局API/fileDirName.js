const fs = require("fs");
const http = require("http");
http.createServer(function (req,res) {
	var htmlPath = __dirname + "\\view.html";
	var htmlContent = fs.readFileSync(htmlPath);
	htmlContent = htmlContent.toString("utf8");
	console.log(htmlContent);
	console.log(htmlPath);
	res.writeHead(200,{"Content-Type":"Text/html"});
	res.end(htmlContent);
}).listen(8080);
