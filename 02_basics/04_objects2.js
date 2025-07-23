// const appuser=new Object() //singleton object
const appuser={} //non-singleton object

appuser.id="123ab"
appuser.name="pratt"
appuser.isloggedin=false

// console.log(appuser);
const mapuser=  
{
  email:"prateek@gmail.com",
  fullname: 
  {
    userfname:
    {
      firname:"prateek",
      lsname:"pandey"
    }
  }
}
// console.log(mapuser.fullname.userfname.lsname);
const obj1={
  1:"a",
  2:"b",
  3:"c"
}
const obj2={
  4:"d",
  5:"e",
  6:"f"
}
const obj4={
  7:"g",
  8:"h",
  9:"i"
}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4) // (target,source)
const obj3={...obj1,...obj2,...obj4} //spread operator
// console.log(obj3);

const users=[
  {
    id:1,
    email:"h@gma.com"
  },
  {
    id:2,
    email:"hsdf@gma.com"
  },
  {
    id:3,
    email:"hdfdfd@gma.com"
  }
]
users[1].email
// console.log(appuser);
// console.log(Object.keys(appuser));//only keys
// console.log(Object.values(appuser));//only value
// console.log(Object.entries(appuser));//key and value in a seperate arrays
// console.log(appuser.hasOwnProperty('isloggedin'));

const course= {
  coursename:"js",
  price:"999",
  teacher:"hitesh"
}

// console.log(course.teacher);
// console.log(course["teacher"]);
const{teacher}=course //makes it smaller to use the objectss out and accessing thing inside them
console.log(teacher);
const{teacher:teach}=course //we can it anything
console.log(teach);


// {
//   name:"hitesh",
//   coursetaker:"hitesh",   //JSON Example
//   price:"090909"
// }

// [
//   {},
//   {},
//   {}
// ]