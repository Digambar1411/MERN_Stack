const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const resultEl = document.querySelector('.result');
const scoreEl = document.querySelector('.score')

let score ={
  my:0,
  computer: 0,
  tie: 0
}

const getResult = (myChoice, computerChoice) => {
	let result;
	if (
		(myChoice === 1 && computerChoice === 3) ||
		(myChoice === 2 && computerChoice === 1) ||
		(myChoice === 3 && computerChoice === 2)
	) {
		result = "I Won";
    score.my++;
	}
	else if (myChoice === computerChoice) {
		result = "It's tie";
    score.tie++;
	} else {
		result = "You Won";
    score.computer++;
	}
	return result;
};

const displayResult = (myChoice, computerChoice, result)=>{

  scoreEl.innerHTML = `<div> I won : ${score.my}, You own: ${score.computer}, tie : ${score.tie}`;

  displayEl = 
  `<div> I choose  :<strong> ${myChoice} </strong><div>
  <div>You choose :<strong> ${computerChoice === 1 ? 'Rock' : computerChoice === 2 ? 'Paper' : 'Scissor'}</strong><div>
  <div>Result :<strong> ${result}</strong><div>`
  resultEl.innerHTML=displayEl;
}

const handleClick = (item) => {
	console.log(`${item} clicked`);
	let myChoice;
	if (item === "Rock") myChoice = 1;
	if (item === "Paper") myChoice = 2;
	if (item === "Scissor") myChoice = 3;
	let computerChoice = Math.floor(Math.random() * 3 + 1);
	console.log("myChoice", myChoice);
	console.log("computerChoice", computerChoice);

	let result = getResult(myChoice, computerChoice);
  displayResult(item, computerChoice, result);
};

rockBtn.addEventListener("click", () => handleClick("Rock"));
paperBtn.addEventListener("click", () => handleClick("Paper"));
scissorBtn.addEventListener("click", () => handleClick("Scissor"));
