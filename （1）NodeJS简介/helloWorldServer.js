const http = require("http");

var server = http.createServer(function(req,res){
    server.write("hello,world");
    server.end();
}).listen(8080);

console.log("server is listening 8080")
console.log("hello world");