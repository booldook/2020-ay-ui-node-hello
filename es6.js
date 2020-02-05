var fn = function(x) {
	return x * x;
}

var fn2 = (x) => {
	return x * x;
}

var fn3 = (x, y) => x * y;

console.log(fn(4), fn2(4), fn3(4, 5));

// 새로운 ES6 변수
let a = 10;
a = 20;
console.log(a);

// 새로 만들어진 상수
const pi = 3.141592;
const arr = [];
arr[0] = "A";
arr[1] = "B";
console.log(arr);