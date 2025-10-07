// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
	startGame();
});

let poging =0
let name="";
let numberToGuess = null;
let wonPlayers = [];

function savename(){
	name=document.getElementById("nameuser").value;
	console.log(name);
} 


function startGame() {
	numberToGuess = Math.floor(Math.random()* 10);
	console.log(numberToGuess)
}


function inputnumber(){
	
	console.log('poging: ' + poging)
	
	if (poging >= 3) {
		alert("Je hebt al 3 pogingen gedaan. Herlaad de pagina om opnieuw te spelen.");
	} else {
		let number=document.getElementById("numberinput").value;
		console.log(number) 
	
		if (number == numberToGuess){
			alert(" nummer is juist!");
			gameWon();
			//naam opslaan in array - zodat we laatste 3 succesvolle spelers kunnen tonen
		}else {
			alert("helaas het nummer is fout ");
			poging++;

		}
	}	
}

function gameWon() {
	if(wonPlayers.length == 3) {
		wonPlayers.shift();	   
	}
	wonPlayers.push(name);
document.getElementById("winners").textContent = wonPlayers.join(", ");
	
}

