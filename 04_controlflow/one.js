//if


// const isuser=true
// if(isuser){
// }


// == (2=s) =>checks for only the value
// === (3=s)=>checks for type as well as the value


// const score=900
// if(score>100){
//   const pow="timetravel"
//   console.log(`use power ${pow}`);
// }else{
//   const pow="fly"
//   console.log(`use power ${pow}`);
// }

const bal=1000
if (bal>500) console.log("test")//,  //implicit type of if statement
// console.log("test2");//using commas we can extend a implicit if statement

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { //all included,both should be true to 
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { //whichever is true,either
    console.log("User logged in");
}