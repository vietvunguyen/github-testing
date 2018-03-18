var obj = {
	x: 5
	double: dub(this.x);
}
function dub(x){
	return x*2;
}

console.log(obj.double);