var ballX = 600;
var ballY = 300;
var ballXp = 10;
var ballYp = 8;
var barX = 600;
var barY = 700;
var score = 0;
var scene = 0;

function setup(){
    canvasSize(1200, 800);
    lineW(3);
    loadImg(0, "image/bg.png");
    loadSound(0, "sound/se.m4a");
}

function mainloop(){
    drawImg(0, 0, 0);
    setAlp(50);
    fRect(250, 50, 700, 750, "black");
    setAlp(100);
    sRect(250, 50, 700, 750, "silver");
    fText("SCORE: " +score, 600, 400, 40, "white");
    sCir(ballX, ballY, 10, "lime");
    sRect(barX-50, barY-10, 100, 20, "violet");
    if(scene == 0){
        fText("Squash Game", 500, 200, 48, "cyan");
        fText("Click to start!", 600, 600, 36, "gold");
        if(tapC == 1){
            ballX = 600;
            ballY = 300;
            ballXp = 12;
            ballYp = 8;
            score = 0;
            scene = 1;
        }
    }
    else if (scene == 1){
    ballX = ballX + ballXp;
    ballY = ballY + ballYp;
    if(ballX <= 260 || ballX >= 940) ballXp = -ballXp;
    if(ballY <= 60) ballYp = 8+rnd(8);
    if(ballY > 800) scene = 2;
    barX = tapX;
    if(barX < 300) barX = 300;
    if(barX > 900) barX = 900;
    if(barX-60<ballX && ballX<barX+60 && barY-30<ballY && ballY<barY-10){
        ballYp = -8-rnd(8);
        score = score + 100;
        playSE(0);
    }
}
else if(scene == 2){
    fText("Game Over", 600, 450, 36, "red");
    if(tapC == 1){
        scene = 0;
        tapC = 0;
    }
    }
}
