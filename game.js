var counter = 0;

function setup() {
    canvasSize(1200, 800);
    setFPS(30);
}

function mainloop(){
    counter++;
    fill("blue");
    fRect(50, 50, 1100, 700, "navy");
    fText("Counter: " +counter, 600, 400, 36, "white");
}