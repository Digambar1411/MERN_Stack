// in built functions
const arr = [1,2,3,4];
const doubledArr = arr.map(arr=>arr*2);
console.log(doubledArr);


//HOF which accept func as arg
const repeat= (operation,num)=>{
  for(let i =0; i<num; i++){
    operation();
  }
}
repeat(()=>console.log('Hello'),3);


//HOF which returns a function 
const double = () =>{
  return num => num *2;
}
console.log(double()(5));