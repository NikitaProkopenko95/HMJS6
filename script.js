//Задача 1

let newString = 'aaa@bbb@ccc';

console.log(newString.replace(/@/gi, '!'));

// Задача 2

let dateNow = '2025-12-31';
let symbol = dateNow.split('-');
let results = symbol[2] + '/' + symbol[1] + '/' + symbol[0];

console.log(results);


// Задача 3

let learJs = '«Я учу javascript!».';

console.log(learJs.substring(3, 6));
console.log(learJs.substr(3,3));
console.log(learJs.slice(3, 6));

// Задача 4

let arr = ['4', '2', '5', '19', '13', '0', '10'], 
    sum = 0, 
    result;

for (i = 0; i < arr.length; i++) {
result = Math.sqrt(sum += Math.pow(arr[i], 3));
}
console.log(result);

//Задача 5 

let a = 6,
    b = 1,
    c = Math.abs(a-b);

console.log(c);

//Задача 6 

let date = new Date();

function getZero(i) {
	if (i >= 0 && i <= 9) {
		return '0' + i;
	} else {
		return i;
	}
};

console.log (date.getHours() +':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getFullYear()) + '.' + getZero(date.getMonth() + 1) + '.' + getZero(date.getDate()));

//Задача 7

let regular = 'aa aba abba abbba abca abea';

console.log(regular.search(/aba/), regular.search(/abba/), regular.search(/abbba/));
console.log(regular.match(/ab+a/gi));
