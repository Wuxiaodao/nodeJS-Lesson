const fs = require("fs");
const path = require("path");

var readPath = path.join(__dirname,"/from.txt");
var readStream = fs.createReadStream(readPath);
var writePath = path.join(__dirname,"/to.txt");
var writeStream = fs.createWriteStream(writePath);
readStream.pipe(writeStream);
