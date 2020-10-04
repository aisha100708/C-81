canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
var color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(400, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color_input").value;
    x_value = e.clientX - canvas.offsetLeft;
    y_value = e.clientY - canvas.offsetTop;
    circle(x_value, y_value);
}
function circle(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();
}
function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}