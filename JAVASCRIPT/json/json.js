let count = localStorage.getItem('incrementCount') || 0;
let btnEl = document.querySelector('#btn');


const updateState = (count) =>{
  btnEl.innerText = count;

  if(count%2===0){
    btnEl.classList.add('even');
    btnEl.classList.remove('odd');
  }else{
    btnEl.classList.add('odd');
    btnEl.classList.remove('even');
  }
}

const incrementCount = () =>{
  count++;
  localStorage.setItem('incrementCount',count);
  updateState(count);
}

updateState(count);