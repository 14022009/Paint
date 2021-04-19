mycanvas = document.getElementById('c');
object = mycanvas.getContext("2d");
var color = "black";
object.beginPath();
object.strokeStyle = color;
object.lineWidth = 2;
object.arc(250, 200, 40, 0, 2 * Math.PI);
object.stroke();
mycanvas.addEventListener("mousedown", drawcircle);

function drawcircle(e) {
    color = document.getElementById("colorinp").value;
    radius = document.getElementById("radiusinp").value;
    linewidth = document.getElementById("linewidthinp").value;
    var stx = e.clientX - mycanvas.offsetLeft;
    var sty = e.clientY - mycanvas.offsetTop;
    console.log(stx);
    console.log(sty);
    object.beginPath();
    object.strokeStyle = color;
    object.lineWidth = 5;
    object.arc(stx, sty, radius, 0, 2 * Math.PI);
    object.stroke();
}
function clear_area(){
    console.log("Clear");
    object.clearRect(0,0,object.canvas.width,object.canvas.height);
}