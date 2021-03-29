// Dice Figure 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "assets/dice_" + randomNumber1 + ".png";

var image1 = document.querySelector(".dice-figure-1");
image1.setAttribute("src", randomImageSource1);


// Dice Figure 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "assets/dice_" + randomNumber2 + ".png";

var image2 = document.querySelector(".dice-figure-2");
image2.setAttribute("src", randomImageSource2);


// Displaying winner title
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆"
} else {
    document.querySelector("h1").textContent = "Draw"
}