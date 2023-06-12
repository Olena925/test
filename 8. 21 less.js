// const hamburger = 5;
// const frie = 0;

// if(hamburger && frie){
//     console.log("I am eating");
// }

// console.log((hamburger && frie));//обернули у подвійні круглі скобки, щоб одразу отримати результат


// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola === 1 && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "boubioio");

// if(hamburger === 3 && cola === 1 && fries){
// 	console.log("All eating");
// } else {
// 	console.log("We are going");
// }


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if(hamburger === 3 && cola ===2 || fries ===3 && nuggets){
	console.log("All happy");
} else {
	console.log("We are going");
}

console.log(hamburger === 3 && cola ===2 || fries ===3 && nuggets);
console.log(hamburger || cola || fries);

let johnRepot, alexRepot, samRepot, mariaRepot = "done";

console.log(johnRepot || alexRepot || samRepot || mariaRepot);

console.log(!0);