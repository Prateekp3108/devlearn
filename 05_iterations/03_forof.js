// for of

// for (const element of object) {
//body 
// }

const arr=[1,2,3,4,5]
for (const index of arr) {
// console.log(index);
}

const greetings="helloworld"
for(const greet of greetings){
  if(greet==" "){
    continue;
  }
  // console.log(`each char is ${greet}`);
}

//maps

const map=new Map()
map.set("IN","India")
map.set("USA","USAmerica")
map.set("USSR","Russia")
map.set("FR","France")
map.set("IN","India")//doesnt give duplicate values
// console.log(map);

for(const [key,value] of map){ //[]=>becoz to destructure it coz then every key value pair will be printed as an array
  console.log(key,value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }