const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const resultEl = document.querySelector('.result');
const scoreEl = document.querySelector('.score')
const resetBtn = document.querySelector('.reset')

let score ={
  my:0,
  computer: 0,
  tie: 0,
  saveScore: function(){
    localStorage.setItem('score', JSON.stringify(this));
  },
  updateScore: function(){
    this.saveScore();
    scoreEl.innerHTML = `<div> I won : ${this.my}, You own: ${this.computer}, tie : ${this.tie}`
  }
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
  displayEl = 
  `<div> I choose  :<strong> ${myChoice} </strong><div>
  <div>You choose :<strong> ${computerChoice === 1 ? 'Rock' : computerChoice === 2 ? 'Paper' : 'Scissor'}</strong><div>
  <div>Result :<strong> ${result}</strong><div>`
  resultEl.innerHTML= displayEl;
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
  score.updateScore();
  displayResult(item, computerChoice, result);
};

const resetScore =()=>{
  console.log('clear called')
  score.my=0;
  score.computer=0;
  score.tie=0;
  score.updateScore();
}

const initialize =() => {
  let scoreStr = localStorage.getItem('score');
  if(scoreStr){
    let scoreVal = JSON.parse(scoreStr);
    score.my= scoreVal.my;
    score.computer= scoreVal.computer;
    score.tie= scoreVal.tie;
    score.updateScore();
  }
}

initialize();

rockBtn.addEventListener("click", () => handleClick("Rock"));
paperBtn.addEventListener("click", () => handleClick("Paper"));
scissorBtn.addEventListener("click", () => handleClick("Scissor"));
resetBtn.addEventListener('click',resetScore)
