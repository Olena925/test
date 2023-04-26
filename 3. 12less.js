const arr = ["a", "b", "c"];

const arrObj = { //записали теж саме у вигляді обьєкту
	a: "a",
	1: "b",
	2: "c",
};

arrObj.b = "1234";// додали до обьєкту ключ b 
// arrObj ["b"] ="1234"; // записали теж саме інакше

console.log(arr[1]);
console.log(arrObj.a);
console.log(arrObj.b); // або так console.log(arrObj ["b"])
console.log(arrObj [1]);



const obj = { a: 1, b: 2, c:3};

console.log(obj.b);

const user = {
	"Anna": 500,
	"Olena": 10000000,
	Mikl: 10000000,
	gest: {
		sing: [{}, {}],
		Akim: 10000000,
		Svetlana: 100000,
	}
};

