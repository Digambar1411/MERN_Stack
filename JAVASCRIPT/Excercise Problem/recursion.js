// Print N numbers using recursive approcach 
function printNumbers(n){
  if( n <=0) return 0;
  printNumbers(n-1);
  console.log(n);
}
// printNumbers(5);

// fibonacci series using recursive approach 

function fibonacci(n){
  if(n === 0) return 0;
  else if(n === 1) return 1;
  else return fibonacci(n-1)+ fibonacci(n-2);
}
function printFibonacciSeries(n){
  for(let i = 0; i < n; i++){
    console.log(fibonacci(i));
  }
}
console.log(printFibonacciSeries(5));


// sum of digits of given number 
function sumOfDigitsOfNumber(n){
  if( n <=0) return 0;
  let sum = n % 10
  return sum += sumOfDigitsOfNumber(Math.floor(n/10))
}
// console.log(sumOfDigitsOfNumber(12));

let x = 5;
function test1(){
    x = 10;
    // let x = 20;
    // console.log(x);
    console.log('gd')
}
test1();