function saymyname() //fucntion syntax
{
  console.log("p");
  console.log("r");
  console.log("a");
  console.log("t");
  console.log("e");
  console.log("e");
  console.log("k");

}
// saymyname(); //function called


// function addnum(number1,number2) //(number1,number2) => parameters
// {
//   console.log(number1+number2);
// }



function addnum(number1,number2) //(number1,number2) => parameters
{
  let result=number1+number2;
  // console.log("hitesh");
  // return result
  return number1+number2;
}
// addnum(3,4);
addnum(3,4); // (null,4)=>arguments
const result = addnum(5,8);
// console.log(result);



function loginusermsg(username="random"){ //for default value

  // if(username===undefined){
  if(!username){ //! is for not
    console.log("please enter a valid username");
    return " "
  }
  
  return `${username} just logged in`

}
// console.log(loginusermsg("prateek"));
console.log(loginusermsg("prattt"));



function calccartprice(val1,val2,...num1){
  return [...num1];
}
// console.log(calccartprice(200,400,5000,234567,98765));


// const user={
//   username:"aosdf",
//   price:3434
// }
function handleobj(anybject){
  // console.log(`Username is ${anybject.username} and the price is ${anybject.price}`);
}
// handleobj(user);

handleobj({
  username:"prateek",
  price:100
})

const myNewarr=[200,400,100,600]

function returnSecondValue(getArray){
  return getArray[1];

}
console.log(returnSecondValue(myNewarr));