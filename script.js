let randomNumber;
let attemptsLeft = 3;
let playerName = "";
let winnersList = [];

function savename() {
    const nameInput = document.getElementById("nameuser").value.trim();
    if (!nameInput) {
        alert("Vul je naam in!");
    } else {
		playerName = nameInput;
		document.getElementById("winners").innerHTML = `Welkom ${playerName}! Raad een getal tussen 1 en 10.`;
		startGame();
	}
    
}

function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attemptsLeft = 3;
    document.getElementById("numberinput").value = "";
    console.log("Te raden getal:", randomNumber);
}

function inputnumber() {
    if (!playerName) {
        alert("Vul eerst je naam in!");
    } else {
		compareNumbers();		
	}
}

function compareNumbers() {
	const guess = Number(document.getElementById("numberinput").value);
    const display = document.getElementById("winners");
	if (attemptsLeft <= 0) {
			display.innerHTML = `Geen pogingen meer! Het juiste getal was $ {randomNumber}.`;
			showLastWinners();
			resetAfterDelay();
		} else {
			if (guess === randomNumber) {
			display.innerHTML = `Gefeliciteerd ${playerName}! Je hebt het getal geraden in ${4 - attemptsLeft} pogingen!`;
			updateWinners(playerName);
			showLastWinners();
			resetAfterDelay();
			} else {
				attemptsLeft--;
				if (attemptsLeft > 0) {
					display.innerHTML = `Fout! Probeer opnieuw. Je hebt nog ${attemptsLeft} pogingen.`;
				} else {
					display.innerHTML = `Helaas! Het juiste getal was ${randomNumber}.`;
					showLastWinners();
					resetAfterDelay();
				}
			}
		}
}

function updateWinners(name) {
    winnersList.push(name);
    if (winnersList.length > 3) {
		winnersList.shift();
	}
}

function showLastWinners() {
    const display = document.getElementById("winners");
    let html = display.innerHTML + "<br> <br>Laatst 3 winnaars:<ul>";
    winnersList.forEach(name => {
        html += `<li>${name}</li>`;
    });
    html += "</ul>";
    display.innerHTML = html;
}

function resetAfterDelay() {
    setTimeout(() => {
        document.getElementById("nameuser").value = "";
        document.getElementById("numberinput").value = "";
        document.getElementById("winners").innerHTML = "Vul je naam in om opnieuw te beginnen.";
        playerName = "";
    }, 5000);
}

