let obj1 = {
  name:'digambar',
  age:20
}

let obj2 = obj1;

let obj3 ={
  name:'digambar',
  age:20
}

console.log(obj1 == obj2);  //refering same address location
console.log(obj1 === obj2); //refering same address location
console.log(obj1 === obj3);  //refering to two separate address location
