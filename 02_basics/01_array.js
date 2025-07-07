//arrays

const myarr= [0,1,2,3,4,5] 
//inside square brackets, elements make an array
// console.log(myarr);

const myarr2= new Array(0,4,64,65,23,77,34,12)
// console.log(myarr2.length)
// console.log(myarr2);

//array methods

myarr2.push(6)
myarr2.push(4545)
myarr2.push("dfdfdf")
myarr2.pop()
// console.log(myarr2); 
myarr2.unshift(4)
myarr2.shift()
// console.log(myarr2); 
// console.log(myarr.includes(4));
// console.log(myarr.indexOf(4));
const newarr=myarr.join();
// console.log(myarr);
// console.log(typeof newarr);

//slice ,spice
console.log("A",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1)
console.log("B",myarr)
const myn2=myarr.splice(1,3)
console.log("c",myarr)
console.log(myn2)

//slice doesnt include end range (shallow copy), original array not modified
//splice does add/remove/change elements , modifies original array