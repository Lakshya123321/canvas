var mouseevent = "empty";

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "black";
width= 2;
radius= 20;

canvas.addEventListener("mousedown" , my_mouseDown);

function my_mouseDown(e){
    color= document.getElementById("color").value;
    width= document.getElementById("width").value;
    radius= document.getElementById("radius").value;

    mouseevent="mousedown";
}

canvas.addEventListener("mousemove", my_mouseMove)

function my_mouseMove(e){current_position_of_mouseX = e.clientX - canvas.offsetLeft;
    current_position_of_mouseY = e.clientY - canvas.offsetTop;
    if(mouseevent== "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width;
        ctx.arc(current_position_of_mouseX,current_position_of_mouseY,radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouseX;
    last_position_of_y = current_position_of_mouseY;}

canvas.addEventListener("mouseup",my_mouseUp);

function my_mouseUp(e){
    mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseLeave);

function my_mouseLeave(e){
    mouseevent = "mouseleave";
}

function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}