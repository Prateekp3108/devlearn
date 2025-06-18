let score = 33;
let score1 = "33";
console.log(typeof score);
console.log(typeof score1);

let valinnum = Number(score1);
console.log(typeof valinnum);
console.log(valinnum); //output value=> NaN

//mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript
//tc39.es https://tc39.es/ecma262/

//"33"=>33
//"33asd"=>NaN

let islogin = 1;
let boolislogin = Boolean(islogin);
console.log(boolislogin);

// true=1 false=0
// ""=>false
// "prateek"=>true

let somenum = 343;
let stringsomenum = String(somenum);
console.log(stringsomenum);
console.log(typeof stringsomenum);

// operations

let val = 4;
let negval = -val;
console.log(negval);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 11); //power
console.log(2 / 2);
console.log(2 % 2); //remainder

let str1 = "prateek";
let str2 = " pandey";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2 + 2); //=122
console.log(1 + 2 + "2"); //=32

console.log(+true);
console.log(+" ");
let num, num1, num2;
num1 = num2 = num3 = 2 + 2;

let g = 100;
let h = g++;
console.log(h, g);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
