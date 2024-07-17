let count = localStorage.getItem('num') || 0;

function incrementCount() {
	count++;
  localStorage.setItem('num',count);
	updateBtnState();
}

function updateBtnState() {
	let btnEl = document.querySelector("#btn");
	let isEven = count % 2 === 0;
	if (isEven) {
		btnEl.classList.remove("odd");
		btnEl.classList.add("even");
	} else {
		btnEl.classList.remove("even");
		btnEl.classList.add("odd");
	}
	btnEl.innerText = count;
}

updateBtnState();
