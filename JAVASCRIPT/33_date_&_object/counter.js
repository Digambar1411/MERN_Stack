const btnEl = document.querySelector(".btn");
let count = parseInt(localStorage.getItem("count")) || 0;

const clickHandler = () => {
	count++;
	localStorage.setItem("count", count);
	updateBtn();
};

btnEl.addEventListener("click", clickHandler);

const initialize = () => {
	updateBtn();
};

const updateBtn = () =>{
  btnEl.textContent = count;
  if(count % 2 === 0){
    btnEl.classList.add('even');
    btnEl.classList.remove('odd');
  }else{
    btnEl.classList.add('odd');
    btnEl.classList.remove('even');
  }
}

initialize();
