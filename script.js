// Your JS goes here
body = document.querySelector("body");
var tiles = [];
function randomColor (){
  var RGBArray = [];
  for (var i =0; i < 3; i ++) {
    RGBArray.push(Math.floor(Math.random() * 255));
  }
  return "rgb(" + RGBArray[0] + "," + RGBArray[1] + "," + RGBArray[2] + ")" ;
}

function tiler (num) {
  var count = 1;
  for( var i =0; i < num; i++){
    tiles.push(document.createElement("div"));
    body.appendChild(tiles[i]);
    tiles[i].style.width = "11.1%";
    tiles[i].style.float = "left";
    tiles[i].style.paddingBottom = "11.1%";   
    tiles[i].style.backgroundColor = randomColor();
  }
  count++; 
}
tiler(63);
