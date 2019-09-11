var arg = process.argv[2];
var arg1 = process.argv[3];
if(arg == undefined){
  console.log("错误");
}
else if(arg == "-h"){
  console.log("错误");
}
else{
  var result = eval(arg + "+" + arg1);
  console.log(arg + "+" + arg1 + "=%d",result);
}