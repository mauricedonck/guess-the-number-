// JavaScript Document
var name="";
let numberToGuess = null;

function savename(){
	name=document.getElementById("nameuser").value;
	console.log(name);
} 


function startGame() {
	numberToGuess = Math.floor(Math.random() * max=10 min=1);
}


document.addEventListener("DOMContentLoaded", function() {
	startGame();
});

function inputnumber(){
	let number=document.getElementById("numberinput").value;
	console.log(number)
}