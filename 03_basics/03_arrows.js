const user = {
  username: "prateek",
  price: "999",

  welcomemsg: function () {
    console.log(`${this.username},Welcome to the website`);
    // console.log(this);
  },
};

// user.welcomemsg();
// user.username = "tanush";
// user.welcomemsg();

// console.log(this);
//here golbal object is an empty object
//browser global object => window object

// function chai(){
//   let username="hitesh"
//   console.log(this.username);// cannot be used inside a function but only inside a object
// }
// chai()

// const chai= function(){
const chai= () => {
  let username="prateek"
  // console.log(this);
}
// chai()

// const addtwo=(num1,num2) => { 
//   return num1+num2; //explicit return
// } 
const addtwo=(num1,num2) => (num1+num2)//implicit return //({username:"prateek"});for returning objects 
// console.log(addtwo(3,4));