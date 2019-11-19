const http = require("http");
const path = require("path");
const fs = require("fs");

var fileName = process.argv[2];
var filePath = path.join(__filename);

if(fileName != undefined) {
    filePath = path.join(__dirname, '/' + fileName);
    if(!fs.existsSync(filePath)) {
        console.log("该文件不存在!");
        process.exit();
    }
}

http.createServer((req, res) => {
    var fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
}).listen(8081);
console.log("Listen 8081");