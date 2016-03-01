// Your JS goes here
body = document.querySelector("body");
var tiles = [];
function tiler (num) {
  var count = 1;
  for( var i =0; i < num; i++){
    tiles.push(document.createElement("div"));
    body.appendChild(tiles[i]);
    tiles[i].style.width = "11.1%";
    tiles[i].style.float = "left";
    tiles[i].style.paddingBottom = "11.1%";
   if (count % 2 === 0) {
     tiles[i].style.backgroundColor = "red";
   }
   else {
    tiles[i].style.backgroundColor = "black";
   }
   count++; 
  }
}
tiler(63);
