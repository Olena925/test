"use strict";


if(4 == 9){
	console.log("ok");
}else{
	console.log("Error");
}

const num = 50;

// if(num < 49){
// 	console.log("Error");
// }else if(num > 100){
// 	console.log("many");
// }else{
// 	console.log("ok");
// }

// (num === 50) ? console.log("ok") : console.log("Error");


switch (num) {
case 49:
	console.log("No corect");
	break;
case 100:
	console.log("no corect");
	break;
case 50:
	console.log("Ok");
	break;
default:
	console.log("No this time");
	break;
}