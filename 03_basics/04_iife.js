//Immediately Invoked Function Expressions (IIFE)

(function chai(){ //named iife
  // console.log(`DB CONNECTED`);
})(); //iife as in like fucntion() to what we do where we defien fucntion body is a calling so (fucntion body)() that is how we call

( ()=>{
  console.log("db connected again");
}
)(); //unamed iife using arrow function

const res=(function coffee(num1,num2)
            {
              return num1+num2;
            }
          )(9,6);

console.log(`${res}, is the answer`);

//rememeber to put a semmicolon after a iife
