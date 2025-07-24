const userEmail=[]

if(userEmail){
  // console.log("got user email");
}else{
  // console.log("dont have");
}
//**Falsy values**
// false,0,-0,BigInt 0n,"",null,undefined,Nan

//**truthy values**
//anything string,[],{},function(){}

if(userEmail.length===0){
  // console.log("array is empty");
}

const emptyobj={

}

if(Object.keys(emptyobj).length===0){
    // console.log("object is empty");
}

//**Nullish coalescing operator(??):null undefined**

let val1;
// val1=5??10 //chooses the first one
val1=null??10 //if val null or undefined then it chooses the other one
// console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice=100
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80");