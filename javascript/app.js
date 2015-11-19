function chooseWinner () {

	var player1;
	var player2;

	player1 = RockPaperScissor(); 
	player2 = RockPaperScissor();

	var winner;
	
	if ( player1 === "rock" && player2 === "scissor" ) {
	    winner = "player 1";
	}

	if ( player1 === "rock" && player2 === "paper" ) {
	    winner = "player 2";
	}

	if ( player1 === "paper" && player2 === "scissor" ) {
	    winner = "player 2";
	}

	if ( player1 === "paper" && player2 === "rock" ) {
	    winner = "player 1";
	}

	if ( player1 === "scissor" && player2 === "paper" ) {
	    winner = "player 1";
	}

	if ( player1 === "scissor" && player2 === "rock" ) {
	    winner = "player 2";
	}

	if ( player1 === player2 ) {
	    winner = "Tie!";
	}

    document.getElementById("gameResult").innerHTML = winner;

}

function RockPaperScissor () {

	var randomSelector

	randomSelector = Math.random();

	if ( randomSelector	< 0.67 ) {
			if ( randomSelector < 0.33) {
				return "rock"
			}
			else {
				return "paper"
			}
	}
	else {
		return "scissor"
	}


}