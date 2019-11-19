const fs = require("fs");
const path = require("path");

var flag = 0;
var dirPath = '';
var filePath = '';
console.log("请输入要创建的文件夹:");
process.stdin.setEncoding('utf8');
process.stdin.on("data", (data) => {
    if(flag == 0) {
        data = data.substr(6, data.length-1);

        dirPath = path.join(__dirname, data);
        fs.mkdir(dirPath, (err) => {
            if (err) {
                return console.log(err);
            } else {
                console.log("目录创建成功!!");
            }
            console.log("请输入要创建的文件:");
            flag++;       
         });
    } else if (flag == 1) {
        data = data.substr(6, data.length-1);

        filePath = path.join(dirPath, data);
        fs.writeFile(filePath, 'hello node', (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("文件创建成功!!");
            }
            console.log("请输入要删除的文件:");
            flag++;
        });
    } else if (flag == 2) {
        data = data.substr(7, data.length-1);

        var delFilePath = path.join(dirPath, data);

        fs.unlink(delFilePath, (err) => {
            if(err){
                console.log(err);
            } else {
                console.log('删除文件成功');
            }
            process.exit();
        });   
    }
});