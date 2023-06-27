function preload(){

}

function setup(){
canvas = createCanvas(400,400);
canvas.position(650,70);
video = createCapture(VIDEO);
video.hide();

}

function draw(){
image(video,50,50,300,300);
let c = color('lightblue');
fill(c);
noStroke();
circle(30,25,50);
rect(50,20,650,20);
circle(375,25,50);
circle(30,370,50);
rect(50,360,650,20);
circle(375,370,50);

}

function take_snapshot(){
    save('image1.png');
}

