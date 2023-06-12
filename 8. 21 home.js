console.log( NaN || 2 || undefined );
//поверне 2

console.log( NaN && 2 && undefined );
// поверне Nan

console.log( 1 && 2 && 3 );
//поверне 3

console.log( !1 && 2 || !3 );
// поверне false

console.log( 25 || null && !3 );
// поверне 25

console.log( NaN || null || !3 || undefined || 5);
// поверне 5

console.log( NaN || null && !3 && undefined || 5);
//поверне 5

console.log( 5 === 5 && 3 > 1 || 5);
//поверне true


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
	console.log("Done!");
}
// умова виповнеться


let hamburgerі;
const fries1 = NaN;
const cola2 = 0;
const nuggets3 = 2;


if (hamburgerі || cola2 || fries1 === 3 || nuggets3) {
	console.log("Done!");
}
// умова виповнеться


let hamburger3;
const fries5 = NaN;
const cola5 = 0;
const nuggets5 = 2;


if (hamburger3 && cola5 || fries5 === 3 && nuggets5) {
	console.log("Done!");
}
// умова не віповнеться