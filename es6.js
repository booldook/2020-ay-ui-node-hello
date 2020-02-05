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

// var의 범위와 let의 범위
for(var i=0; i<10; i++) {
}
console.log(i);

for(let j=0; j<10; j++) {
	console.log(j);
}
// console.log(j);
