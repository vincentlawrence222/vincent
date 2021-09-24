
var randomNumber1 = Math.floor(Math.random() * 5) + 1; //1-5

var randomdiceImage = "dice" + randomNumber1 + ".png";//dice1.png - dice5.png

var randomImageSource = "image/" + randomdiceImage;//image/dice1.png - image/dice5.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() *5) + 1;

var randomImageSource2 = "image/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if Player 1 wins
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = " Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
	document.querySelector("h1").innerHTML = "Draw";
}
