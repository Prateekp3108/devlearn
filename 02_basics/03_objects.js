//singleton //Object.create
//objectsliterals

const mysym=Symbol("key1")


const jsuser={
  name:"prateek pandey",
  [mysym]:"mykey1",
  age:"20",
  location:"lucknow",
  email:"prateekpandey3108",
}

// console.log(jsuser.email) // This only works when the property name is a valid identifier (no spaces or special characters)
// console.log(jsuser["email"]) //The property name has spaces or special characters,You want to use a variable to access the property
// console.log(jsuser["full name"]) //spaces used
// console.log(typeof(jsuser[mysym]))
// console.log(jsuser[mysym])

// jsuser.email="padhaikaro3108@"
// Object.freeze(jsuser)  //value cant be changes of the key now
// jsuser.email="lessgooo"
// console.log(jsuser);

jsuser.greeting=function(){
  console.log("hello js user");
  
}
jsuser.greeting2=function(){
  console.log(`hello js user, ${this.name}`);  
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());