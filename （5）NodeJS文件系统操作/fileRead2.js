const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        fs.open(process.argv[1],"r+",(err,fd)=>{
            var statObj = fs.statSync(process.argv[1]); 
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,(err,by,buff)=>{
                if(err){
                    console.log(err);
                }else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            });

        });
    }
    else{
        var pathName = path.join(__dirname,fileName);
        fs.open(pathName,"r+",(err,fd)=>{
            var statObj1 = fs.statSync(pathName); 
            var buf1 = Buffer.alloc(statObj1.size);
            fs.read(fd,buf1,0,statObj1.size,0,(err,dy,buff)=>{
                if(err){
                    console.log(err);

                }else{
                    res.end(buf1.toString());
                    res.close(fd,(err)=>{
                        console.log(err);
                    });
                }
            })
        })
    }
}).listen(8081);