var randomNumber1 = Math.floor((Math.random() * 6)) + 1; //to get random number from 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //using basic concatenation to get image when refresh
var randomImageSource = "images/" + randomDiceImage; //since the image is enclosed in images folder and we have to change full source
var image1 = document.querySelectorAll("img")[0]; //[0] to target the first image of the img tag element when selecting querySelectorAll
image1.setAttribute("src", randomImageSource); //setting attribute of the image on refresh
//Doing same for the image 2:
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1<randomNumber2){
  document.getElementById("h1").innerHTML = "Player 2 Wins"; //Or use querrySelector if you have not assigned any id
}
else if (randomNumber1>randomNumber2) {
  document.getElementById("h1").innerHTML = "Player 1 Wins";
}
else {
  document.getElementById("h1").innerHTML = "Draw";
}
