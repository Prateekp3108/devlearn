//while

// intialisation
// while(condition){
//body
//updation
// }

let index = 0;
while (index <= 10) {
  // console.log(`value of index ${index}`);
  index++;
}

let array = ["hi", "bbye", "sir", "fef"]; //using an array to print
let arr = 0;
while (arr < array.length) {
  // console.log(`value is ${array[arr]}`);//printing an array
  arr++;
}

// do-while loop
// do{
// body
//updation
// }while(condition);

let s=11;
do{
  console.log(`score is ${s}`);//body runs before checking condition then the body is already executed before checking condition
  s++;
}while(s<10);
