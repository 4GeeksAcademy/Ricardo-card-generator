import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  //write your code here
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
  let icons = ["♦", "♥", "♠", "♣"];

  let numberGenerator = numbers[Math.floor(Math.random()*numbers.length)];
  let iconGenerator = icons[Math.floor(Math.random()*icons.length)];

  let centerNumber = document.querySelector("#letter");
  let spadeUp = document.querySelector("#spadeA");
  let spadedown = document.querySelector("#spadeB");

  if (iconGenerator === "♦" || iconGenerator === "♥"){
    spadeUp.style.color = "Red"
    spadedown.style.color = "Red"
  };
 
  centerNumber.innerText = numberGenerator;
  spadeUp.innerText = iconGenerator;
  spadedown.innerText = iconGenerator;
};
