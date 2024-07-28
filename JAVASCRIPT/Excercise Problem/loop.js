// prob 2
function getNumberTable(num) {
	let i = 1;
	while (i <= 10) {
		let result = num * i;
		console.log(result);
		i++;
	}
}

// getNumberTable(8);

// prob 2
function sumOfOddNumTill(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		if (i % 2 !== 0) {
			sum += i;
		}
	}
	return sum;
}
// console.log(sumOfOddNumTill(9));

// probm 3 factorial

function getFactorial(num) {
	let result = 1;
	let i = 1;
	while (i <= num) {
		result *= i;
		i++;
	}
	return result;
}
// console.log(getFactorial(10));

// proble 4 : sum of digits of interger
function sumOfDigits(num){
  let sum = 0;
  while(num >0){
    let lastDigit = num % 10;
    sum+=lastDigit;
    num = Math.floor(num/10)
  }
  return sum;
}
// console.log(sumOfDigits(345));

// proble 5 : LCM of two numbers

function getLcm(num1, num2){

}
// console.log(getLcm(6,12));

function getGcd(num1, num2){
  
}
// console.log(getGcd(6,12));


// prime number
function isPrime(num){
  let i = 2
  let isPrimeNum = num >= 2;
  while(isPrimeNum && i < num ){
    isPrimeNum = num % i !== 0
    i++
  }
  return isPrimeNum;
}
// console.log(isPrime(1));
// console.log(isPrime(2));


// fibonacci series 
function fibonacciSeries(n){
  let array = [0,1];
  if(n <= 1) return array.slice(0,n);

  for(let i=2; i<n; i++){
    array.push(array[i-2] + array[i-1]);
  }
  return array
}
// console.log(fibonacciSeries(4));

// check if number is armstrong number
function isArmstrongNumber(n){
  let array = n.toString().split('');
  let sum =0;
  for(let i=0 ; i<array.length; i++){
    let cubeOfDigit= array[i]*array[i]*array[i]
    sum+=cubeOfDigit;
  }
  return n==sum
}
// console.log(isArmstrongNumber(153));

// palindrome
function isPalindrome(num){
  let reverseNum  = num.toString().split('').reverse().join('');
  return num == reverseNum;
}
// console.log(isPalindrome(1512));

// multiplication table for number
function getTableOf(num){
  for(let i = 1; i<=10; i++){
    console.log(`${num } x ${i} = ${i * num}`)
  }
}
// getTableOf(12);

// check if prime number
function checkIfPrime(num){
  let isPrime = num >=2
  if(num < 2) return false;
  let s= Math.sqrt(num)
  for(let i = 2; i<=s; i++){
    isPrime = num % i !== 0
  }
  return isPrime
}
// console.log(checkIfPrime(9))

function doWhileFunction(){
  let sum = 0;
  let num
  do{
    // num = prompt('Enter number');
    num = prompt('Enter number');
    sum+= parseInt(num);
  }while(num > 0);
  alert(`total sum is ${sum}`);
}
// doWhileFunction();


// break and continue 
function breakAndContinue(num){
  for(let i = 0; i<num; i++){
    if(i % 2 === 0) continue;
    if(i === 18) break;
    console.log(i);
  }
}

breakAndContinue(50);

// sum all positive number and skip odd using continue 
function sumUsingContinue(count){
  let sum =0;
  for(let i =0; i<count; i++){
    let num = parseInt(prompt('enter number'));
    if(num % 2 !== 0) continue;
    // if(num == -1) break;
    console.log(num);
    sum+=num;
    console.log(`sum is ${sum}`)
  }
  alert(`sum is ${sum}`);
}
// sumUsingContinue(6);