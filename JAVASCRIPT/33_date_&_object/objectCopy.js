const person = {
  name: "John",
  age: 30,
  address: {
      city: "New York",
      country: "USA"
  },
};

const person2 = {
  name: "John",
  age: 30,
  address: {
      city: "New York",
      country: "USA"
  },
}

const person3 = {
  name: "John",
  age: 30,
  address: {
      city: "New York",
      country: "USA"
  },
}

 //copy using reference assignment
const copiedObject = person; 
copiedObject.age=12;

console.log('original object',person);
console.log('copied object using reference assignment',copiedObject);

//shallow copy using rest 
const copiedObjectUsingRest = {...person2}
copiedObjectUsingRest.age=12;
copiedObjectUsingRest.address.country = 'ind';
console.log('original object',person2);
console.log('copied object using rest',copiedObjectUsingRest);

//shallow copy using object.assign
const copyObject = Object.assign({}, person3);
copyObject.age=12;
copyObject.address.country = 'PAK';
console.log('original object',person3);
console.log('copied object using assig',copyObject);

// deep copy using JSON 
const copiedPerson = JSON.parse(JSON.stringify(person));  //deep copy
copiedPerson.age=82;
copiedPerson.address.country='AUS';

console.log('original object',person);
console.log('deep copy using json',copiedPerson);