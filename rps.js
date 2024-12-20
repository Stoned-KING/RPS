// get the computer choice //

// Math.random returns value between 0 and 1 //
function aiChoice(random) {
    random = Math.random();
    if (random < 0.3 ) {
	return "ROCK" ;
    }else if (random < 0.6) {
	return "PAPER" ;
    }else {
	return "SCISSORS" ;
    }
}


// get the user choice //
// need to be case insensitive //   
// if its not one of the three throw invalid //  
function humChoice() {
    let out;
    out = prompt("Choose Rock, Paper or Scissors").toUpperCase();
    return out;
}


// declare the results //
function compareInput(ai, hum) {
    if (ai === hum) {
	return "THIS IS A TIE! YOU BOTH PICKED " + ai + ".";
    } else if (
	(ai === "ROCK" && hum === "PAPER") ||
	(ai === "PAPER" && hum == "SCISSORS") ||
	(ai === "SCISSORS" && hum === "ROCK")) {
	return "HUMAN WINS. AI PICKED " + ai + " AND YOU PICKED " + hum + ".";
    } else {
	return "AI WINS. AI PICKED " + ai + " AND YOU PICKED " + hum + "." ;
    }
}


// play one round //
// play multiple rounds //


function game () {
    let aiSc = 0;
    let humSc = 0;
    
    for (let x=1; x<=5; x++) {
	ai = aiChoice();
	hum = humChoice();
	result = compareInput(ai, hum);

	if (result.includes("HUMAN WINS")) {
	    humSc++;
	} else if (result.includes("AI WINS")) {
	    aiSc++;
	}

	console.log(result);
	console.log("AI Score: " + aiSc);
	console.log("Hum Score: " + humSc);    
    }
    console.log("FINAL SCORE: AI - " + aiSc +", HUM - " + humSc + " .");
}


game();



// if ai choice and human choice are same its a draw or reroll //
// if rock is against paper it loses and against scissors it wins //
// declare winner for the round //
// add to existing scoreboard //
