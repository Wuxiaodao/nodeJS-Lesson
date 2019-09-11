var math = setInterval(function () {
	loop();
},500);
function loop() {
	console.log("I will loop forever!")
}
setTimeout(function () {
	console.log("Game over");
},5000);
//unref()阻止延时执行或定时执行，回调函数的执行
math.unref();