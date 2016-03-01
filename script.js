// Your JS goes here
body = document.querySelector("body");
var tiles = [];
var firstNum = 10;
var secondNum = 0;
var thirdNum = 255;

function gradient1 () {
  thirdNum -=10; 
  secondNum +=10;
 // if (secondNum % 2 ===0){
  //  firstNum +=10;
 // }
  while (thirdNum < 0) {
    thirdNum +=50;
  }
  while (secondNum > 255){
    secondNum  -=50;
  }
 while (firstNum > 255){
    firstNum -=25;
 }
  return "rgb(" + firstNum + "," + secondNum + "," + thirdNum + ")" ;
}
function tiler (num) {
  for( var i =0; i < num; i++){
    tiles.push(document.createElement("div"));
    body.appendChild(tiles[i]);
    tiles[i].style.width = "11.1%";
    tiles[i].style.float = "left";
    tiles[i].style.paddingBottom = "11.1%";
    tiles[i].style.backgroundColor = gradient1();
  } 
}
tiler(63);
