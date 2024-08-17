const person = {
  name: "John",
  age: 30,
  address: {
      city: "New York",
      country: "USA"
  },
};

const deepCopy =(obj) =>{
  if(obj === null || typeof(obj) !== 'object') return obj;

  const copy = Array.isArray(obj) ? [] : {};

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const copiedObj = deepCopy(person);

copiedObj.address.country = 'IND'

console.log('original object',person);
console.log('copiedObj',copiedObj);