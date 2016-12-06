var words = ["diane", "cherry", "lodge", "truman", "laura"];

function wordChoice() {
	return words[Math.floor(Math.random() * words.length)];
}

var computerWord = wordChoice();

var guessedLetters = [];

function isInArray(a) {
    for (var i = 0;i < guessedLetters.length; i++) {
        if (guessedLetters[i] === a) {
          return true;
        }
    }
    return false;
}

var game = {
	wins: 0,
	losses: 0,
	counter: 0,
	space: 0,
	guessesLeft: 10,
}

document.onkeyup = function (event) {

	var userGuess = event.key;

	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess ===  "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

		if (userGuess === computerWord) {
			document.getElementById("guesses").textContent = " ";
			words[i].guessesLeft = 10;
			var computerWord = wordChoice();
			guessedLetters = [];
		}

		else if (userGuess !== computerWord) {
			if (isInArray(userGuess)) {
          		alert("You already guessed that letter!");
       		}

       		else{
				words[i].guessesLeft--;
				guessedLetters.push(userGuess);
				document.getElementById("guesses").textContent += event.key + " ";
			}
		}
		
		if (game.guessesLeft === 0) {
			game.losses++;
			document.getElementById("guesses").textContent=" ";
			console.log("You lost. The word was " + computerWord);
			game.guessesLeft = 10;
			var computerWord = wordChoice();
			guessedLetters = [];
		}
	}

	document.getElementById("wins").innerHTML = game.wins;
	document.getElementById("hangman-words").innerHTML = computerWord;
	document.getElementById("guesses-left").innerHTML = game.guessesLeft;
	document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
  }
}
