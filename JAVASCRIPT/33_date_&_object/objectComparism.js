const person1 = {
  name: "John",
  age: 30,
  address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
  },
  hobbies: ["reading", "traveling", "swimming"],
  contact: {
      phone: "123-456-7890",
      email: "john@example.com"
  }
};

const person2 = {
  name: "John",
  age: 30,
  address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
  },
  hobbies: ["reading", "traveling", "swimming"],
  contact: {
      phone: "123-456-7890",
      email: "john@example.com"
  }
};

const shallowCompare =(obj1,obj2) =>{
  // check if both object have same reference 
  if(obj1 === obj2) return true;

  // check if both  are object and not null  
  if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || 
    obj1 === null || obj2 === null ){
    return false;
  }

  // compare no of properties 
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if(keys1.length !== keys2.length) return false;


  // comparare each property value 
  for(let key of keys1){
    if(obj1[key] !== obj2[key]) return false
  }

  return true;
}

console.log(shallowCompare(person1, person2));

const deepCompare =(obj1,obj2) =>{
  // check if both object have same reference 
  if(obj1 === obj2) return true;

  // check if both  are object and not null  
  if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || 
    obj1 === null || obj2 === null ){
    return false;
  }

  // compare no of properties 
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if(keys1.length !== keys2.length) return false;


  // comparare each property value 
  for(let key of keys1){
    if(!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) return false;
  }

  return true;
}

console.log(deepCompare(person1, person2));
