let can = document.getElementById("table");
let draw_ = can.getContext('2d');

draw_.fillStyle = "black";
draw_.fillRect(0,0,can.Width,can.height);

draw_.fillStyle = "red";
draw_.fillRect(100,100,30,30);

draw_.fillStyle = "orange";
draw_.beginPath();
draw_.arc(200,200,10,0,Math.PI*2,false);
draw_.closePath();
draw_.fill();