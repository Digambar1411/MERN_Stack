class Animal{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}


// Inheritance
class Dog extends Animal{
  constructor(name, age, breed){
    super(name,age);
    this.breed = breed;
  }
}
const dog1 = new Dog('bhalu', 12,'jerman');
console.log(dog1);