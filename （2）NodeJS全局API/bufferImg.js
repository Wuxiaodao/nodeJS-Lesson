const http = require("http");
const path = require("path");
const fs = require("fs");

http.createServer(function(req,res){
    var imgPath = path.join(__dirname,'./a.png');
    var imgBuffer = fs.readFileSync(imgPath);
    var base = imgBuffer.toString("base64");
    console.log(base);
})
.listen(8081);