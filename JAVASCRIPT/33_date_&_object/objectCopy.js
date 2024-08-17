const person = {
  name: "John",
  age: 30,
  address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
  },
};


 //shallow copy
const copiedObject = person; 
copiedObject.name='dig';

console.log('original object',person);
console.log('copied object using shallow copy',copiedPerson);

// using rest 
const copiedObjectUsingRest = {...copiedObject}

// using object.assign
const copyObject = Object.assign({}, person);


// deep copy using JSON 
const copiedPerson = JSON.parse(JSON.stringify(person));  //deep copy
copiedPerson.name='mahesh';

console.log('original object',person);
console.log('copied object using deep copy',copiedPerson);