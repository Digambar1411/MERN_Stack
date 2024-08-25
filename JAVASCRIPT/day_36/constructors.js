function User(name,age,isAdmin){
  this.name=name;
  this.age=age;
  this.isAdmin=isAdmin;
  this.makeAdmin = function(){
    this.isAdmin=true;
  }
}


const user1 = new User('Dig',27, false);

console.log(user1);
user1.makeAdmin();
console.log(user1);

