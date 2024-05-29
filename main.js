function preload(){

}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw(){

}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML='Status: detecting objects';
}

function modelLoaded(){
    console.log("model is loaded");
}
