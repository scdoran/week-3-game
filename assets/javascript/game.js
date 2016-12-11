
// Word choices.
var words = ["diane", "coffee", "lodge", "truman", "laura"];

// Object containing the game's properties for wins, losses and guesses left.
	var game = {
		wins: 0,
		losses: 0,
		guessesLeft: 7,
		counter: 0,
	}

// This is the function that will choose a random word out of the array.
	function wordChoice() {
		return words[Math.floor(Math.random() * words.length)];
	}
// Variable for the words chosen will be based off the function above.
	var computerWord = wordChoice();

// This variable was set so that each character within the string can be split into individual characters in an array. 
	var wordSplit = computerWord.split("");
	console.log(wordSplit);

// The for loop below will make the words turn into dashes. A span was created within the HTML representing each chracter in the random word chosen.
// Within that span, an id was created and given the value of each characher from the chosen word. These characters were turned into an index of an array by being labeled as "i".
// Each letter is replaced in the HTML with dashes, and lastly, appended to the HTML.

	for (var i = 0; i < computerWord.length; i++) {
			var dashes = document.createElement("span");
			dashes.setAttribute("id", "letter-number" + i);
			dashes.textContent = "-";
			console.log(document.getElementById("hangmanWord").appendChild(dashes));
	}


//This is the empty array that will hold any guessed letters. 
	var guessedLetters = [];

// This function will check if a letter has already been guessed.

	function isInArray(a) {
    for (var i = 0;i < guessedLetters.length; i++) {
        if (guessedLetters[i] === a) {
          return true;
        }
    }
    return false;
	

	document.getElementById("restart").onclick = 

// document.getElementById("picture").innerHTML= "<img src='assets/images/twinpeaks.png'>";
// All of the stuff below will happen when a key is released!
	document.onkeyup = function (event) {

		//This will make the userGuess letters the event key and lower case. 
		var userGuess = event.key.toLowerCase();

		game.counter = wordSplit.length;

		// This loop will run when a user is trying to guess the hangman word. The word chosen was split into strings, so this became an array.
		// Because the split word turned into an array, we use the "i" to target the index of each letter within the split word array.
		// When the letter is guessed correctly, the user's guess is written within the split word array. 
		for (var i = 0; i < wordSplit.length; i++) {
			
			if (userGuess === wordSplit[i]) {
				document.getElementById("letter-number" + i).innerHTML = wordSplit[i];
			}	
		}
		// If the letters guessed do not match the chosen word...
			if (userGuess !== wordSplit[i]) {
				if (isInArray(userGuess)) {
          			alert("You already guessed that letter!");
       			}

       			else{
					game.guessesLeft--;
					guessedLetters.push(userGuess);
					document.getElementById("guesses").textContent += event.key + " ";
				}
			}


		if (game.counter === wordSplit) {
			alert("You win!");

		// Guesses left are reset, computer chooses a new word, and the guessedLetters array becomes empty again. 
			game.guessesLeft = 7;
			wordChoice();
			guessedLetters = [];
		}

	// If the user runs out of guesses the following will happen...

		if (game.guessesLeft === 0) {
			// Audio code that I found.
			var audio = new Audio('assets/sound/fwwmpoem.wav');
			audio.play();

			document.getElementById("guesses").textContent=" ";
			alert("You lost. The word was " + computerWord);
			document.getElementById("picture").innerHTML= "<img src='assets/images/bob.gif'>";
			
			// Guesses left are reset, computer chooses a new word, and the guessedLetters array becomes empty again. 
			game.guessesLeft = 7;
			guessedLetters = [];
			game.losses++;
		}
	}
