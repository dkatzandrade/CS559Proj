function setup() { "use strict";
    var canvas = document.getElementById('myCanvas');
    var slider1 = document.getElementById('slider1');
    slider1.value = 0;
    var slider2 = document.getElementById('slider2');
    slider2.value = 0;
    function changeBackground() {
        document.body.style.background ="Lightblue" ;
     }
     changeBackground();
    
   
    function draw(){
        var context = canvas.getContext('2d');
        canvas.width = canvas.width;
        var dx = slider1.value;
        var dy = slider2.value;
        function drawBackground(){
               //grass
               context.beginPath();
               context.fillStyle = "Lightgreen";
               context.rect(0,650,2000,200);
               context.fill();
               context.closePath();
            //road
            context.beginPath()
            context.fillStyle = "gray";
            context.rect(0,450,800,200);
            context.fill();
            context.closePath();
            //intersection
            context.beginPath();
            context.fillStyle = "gray";
            context.rect(675,0,200,1000);
            context.fill();
            context.closePath();
            //house
            context.beginPath();
            context.fillStyle = "Lightyellow";
            context.rect(900, 300, 300, 350);
            context.fill();
            context.closePath();
            //housewindows
            context.beginPath();
            context.strokeStyle = "Black";
            context.rect(930,350,100,100);
            context.lineWidth=3;
            context.stroke();
            context.closePath();
            context.fillStyle = "LightBlue";
            context.fill();
            context.beginPath();
            context.strokeStyle = "Black";
            context.rect(1070,350,100,100);
            context.lineWidth=3;
            context.stroke();
            context.closePath();
            context.fillStyle = "LightBlue";
            context.fill();
            context.beginPath();
            context.lineWidth = 5;
            context.moveTo(930,400); context.lineTo(1030,400);
            context.moveTo(980,400);context.moveTo(980,350);context.lineTo(980,450);
            context.stroke();
            context.closePath();
            context.beginPath();
            context.moveTo(1070,400); context.lineTo(1170,400);
            context.moveTo(1120,400);context.moveTo(1120,350);
            context.lineTo(1120,450);
            context.stroke();
            context.closePath();
            //door
            context.strokeStyle = "Black";context.lineWidth = 1;
            context.beginPath();
            context.rect(1010,500,75,150);
            context.stroke();context.closePath();context.fillStyle = "Red";
            context.fill();
            context.beginPath(); context.fillStyle= "Gray";
            context.rect(1065,570,10,10);
            context.fill();context.closePath();
    
        }
        function drawCar(color){
            //body
            context.beginPath();
            context.fillStyle = color;
            context.rect(50, 400, 300, 100);
            context.fill();
            context.closePath();
            //wheel1
            context.beginPath();
            context.fillStyle = "black";
            context.arc(100, 500, 40, 0, 2*Math.PI);
            context.fill();
            context.closePath();
            //wheel2
            context.beginPath();
            context.fillStyle = "black";
            context.arc(300, 500, 40, 0, 2*Math.PI);
            context.fill();
            context.closePath();
            //top of car
            context.beginPath();
            context.fillStyle = color;
            context.moveTo(100, 400); context.lineTo(150,350); 
            context.lineTo(250,350); context.lineTo(300, 400);
            context.fill();
            context.closePath();
            //window1
            context.beginPath();
            context.fillStyle = "Lightblue";
            context.moveTo(115, 395); context.lineTo(150,355); 
            context.lineTo(200,355); context.lineTo(200, 395);
            context.fill();
            context.closePath();
            //window outline
            context.beginPath();
            context.lineWidth = 1;
            context.fillStyle = "black";
            context.moveTo(115, 395); context.lineTo(150,355); 
            context.lineTo(200,355); context.lineTo(200, 395);
            context.lineTo(115,395)
            context.stroke();
            context.closePath();
            //window2
            context.beginPath();
            context.fillStyle = "Lightblue";
            context.moveTo(205, 355); context.lineTo(245, 355);
            context.lineTo(285,395); context.lineTo(205,395);
            context.lineTo(205,355);
            context.fill();
            context.closePath();
            context.beginPath();
            context.fillStyle = "black";
            context.lineWidth = 1;
            context.moveTo(205, 355); context.lineTo(245, 355);
            context.lineTo(285,395); context.lineTo(205,395);
            context.lineTo(205,355);
            context.stroke();
            context.closePath();

        }
        drawBackground();
        context.save();
        context.translate(dx,dy);
        drawCar("yellow");
        context.restore();
    }
    slider1.addEventListener("input",draw); 
    slider2.addEventListener("input",draw); 
    draw();
}
window.onload = setup;