var currentQuestion = 0;
var score = 0;
var lengQuestions = questions.length;

var cotainer = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var op1 = document.getElementById('opt1');
var op2 = document.getElementById('opt2');
var op3 = document.getElementById('opt3');
var op4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var resultCont1 = document.getElementById('result1')
var introCont = document.getElementById('intro');	
var procs = document.getElementById('counter');

function start() {
	introCont.style.display = 'none';
	cotainer.style.display = '';
	return;
};

function callback() {
	window.location.href = "index.html";
};

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;	
};

function loadNextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');

	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer) {
		score += 1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if (currentQuestion == lengQuestions - 1) {
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == lengQuestions && score == 5 ) {
		cotainer.style.display = 'none';
		resultCont1.style.display = '';
	}
	if(currentQuestion == lengQuestions && score != 5) {
		cotainer.style.display = 'none';
		resultCont.style.display = '';	
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);