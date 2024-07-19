// ques 3

const btnEl = document.querySelector('.btn');

const growBtn =() =>{
  console.log('clicked');
  btnEl.classList.remove('btn');
  btnEl.classList.add('btn-twice');

}

btnEl.addEventListener('click',()=>setTimeout(growBtn,2000));

// ques 5
const sum=(arr)=>{
  let sum =0;
  arr.forEach(item => sum+=item);
  return sum;
}
console.log('sum is',sum([1,2,3,4,5]));

// que 6
const getSquares =(arr) => arr.map(item => item*item);
console.log('squares are',getSquares([1,2,3,4,5]));