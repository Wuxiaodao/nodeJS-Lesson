const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    if(pathName == '/'){
        showIndex(res);
    }
    else if(pathName == '/list'){
        showList(res);
    }
    else if(pathName == '/image.png'){
        showImg(res);
    }
    else if(pathName == '/upload' && req.method === 'POST'){
        uploadFile(req,res);

    }
    else if(pathName.indexOf("upload") >=0 && req.method == "GET"){
        var imgSrc = path.join(__dirname,pathName);
        var imgContent = fs.readFileSync(imgSrc);
        res.writeHead(200,{"Content-Type":"image-png"});
        res.end(imgContent);
    }
    else if(pathName == "/getlist"){
        var files = fs.readdirSync(__dirname + "/upload");
        var fileStr = JSON.stringify(files);
        res.end(fileStr);
    }
    



}).listen(8081)

function showIndex(res){
    var indexPath = path.join(__dirname,'/index.html');
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});//这是干啥使得？注明文件访问的类型
    res.end(fileContent);

}

function showImg(res){
    var imgPath = path.join(__dirname,'/image.png');
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.end(imgContent);
}

function showList(res){
    var listPath = path.join(__dirname,'/list.html');
    var listContent = fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});//这是干啥使得？注明文件访问的类型
    res.end(listContent);
}

function uploadFile(req,res){
    var dataStr = "";
    req.setEncoding("binary");
    res.on("data",(chunk)=>{
        dataStr += chunk;
    })
    req.on("end",()=>{
        var totalArr = dataStr.split('\r\n');
        var bufArr = totalArr.slice(4,totalArr.length-2);
        var imgData = "";
        for(var i=0;i<bufArr.length;i++){
            imgData += bufArr[i];
        }
        fs.writeFileSync(__dirname+"\\upload\\"+timer + ".png",imgData,{"encoding":"binary"});
        res.end("submit successfully!");
    })
}
/**
 * 自动发起请求的条件：
 * 地址栏中发起http请求  get
 * 超链接发起http请求  get
 * 提交表单发起请求  get请求 post请求均可
 * ajax发起请求        均可
 * <link href=""/> get请求
 * <script src>           get
 * <img src=" ">    get
 * 
 * 
 * get请求，向服务传递的参数都在url里面呈现
 * http：//localhost:8081/detail?newId=1&newType=1
 * var urlObj = url.parse(req.url,true);
 * urlObj.query.newId
 * 
 * post请求，数据存储在请求体里面
 * req.on("data",function(chunk){})
 * req.on("end",function(){})
 */