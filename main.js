function preload(){

}

function setup(){
canvas = createCanvas(200,200);
canvas.position(650,70);
video = createCapture(VIDEO);
video.hide();

}

function draw(){
image(video,0,0,200,200);
let c = color('lightblue');
fill(c);
noStroke();
circle(30,50,50);
rect(75,20,650,20);
}

function take_snapshot(){
    save('image1.png');
}

