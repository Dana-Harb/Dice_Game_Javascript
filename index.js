var x = Math.random() * 6 + 1;
var y = Math.random() * 6 + 1;
var player1dice = Math.floor(x);
var player2dice=Math.floor(y);
var imagesource1 = "images/dice"+player1dice+".png";
var imagesource2 = "images/dice"+player2dice+".png";
document.querySelector("img.img1").setAttribute("src",imagesource1);
document.querySelector("img.img2").setAttribute("src",imagesource2);
if(player1dice > player2dice){
  document.querySelector("h1").textContent = "Player 1 Wins !";
}
else if(player1dice < player2dice){
  document.querySelector("h1").textContent = "Player 2 Wins !";
}
else{
  document.querySelector("h1").textContent = "Draw !";
}
