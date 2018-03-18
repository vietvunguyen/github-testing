var obj = {
	x: 6
	double: dub(this.x);
}
function dub(x){
	return x*3;
}

console.log(obj.double);