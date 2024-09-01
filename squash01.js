function setup(){
    canvasSize(1200, 800);
    lineW(3);
    loadImg(0, "image/bg.png");
}

function mainloop(){
    drawImg(0, 0, 0);
    setAlp(50);
    fRect(250, 50, 700, 750, "black");
    setAlp(100);
    sRect(250, 50, 700, 760, "silver");
}