var myName = ["VietVu", "Nguyen"];
var myLocation = ["Tokyo", "Japan"];
var myContactInfo = "vietvunguyen vu@gmail.com";

function joinName(name, seperator){
	var joinName = name.join(seperator);
	return joinName;
}

function splitString(str){
	return str.split(" ");
}


function createProfile(name, location, info){
	var obj ={
		name: function(){return joinName(name, " ")},
		location: function(){return joinName(location, ", ")},
		github: function(){return splitString(info)[0]},
		email: function(){return splitString(info)[1]}
	}
	return obj;
}

var myProfile = createProfile(myName, myLocation, myContactInfo);

console.log("Full name: " + myProfile.name()+ "\nLocation: " + myProfile.location()+ "\nGithub handle: " + myProfile.github()+ "\nEmail: " + myProfile.email());
 console.log(typeof myProfile);