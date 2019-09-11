function Bomb() {
	this.message = "bomb!!!";
}
Bomb.prototype.explode =function () {
	console.log(this.message);
};
var a = new Bomb();
setTimeout(function () {
	a.explode();
},2000);