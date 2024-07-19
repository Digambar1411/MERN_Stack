const btnEl = document.querySelector('.btn');

const growBtn =() =>{
  console.log('clicked');
  btnEl.classList.remove('btn');
  btnEl.classList.add('btn-twice');

}

btnEl.addEventListener('click',()=>setTimeout(growBtn,2000));