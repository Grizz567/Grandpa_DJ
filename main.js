song1 = "";
song2 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("1.mp3");
    song2 = loadSound("2.mp3");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");
    
    if(scoreLeftWrist > 0.2){

        circle(leftWristX, leftWristY, 20);
        stop("1.mp3");

        if(song1 == false){
            song.play("1.mp3");
            <h3>Song 1</h3>
        }
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWristX.x; 
        leftWristY = results[0].pose.leftWristY.y;

        console.log("leftWristX =  " + leftWristX + ", leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWristX.x;
        rightWristY = results[0].pose.rightWristY.y;

        console.log("rightWristX = " + rightWristX + ", rightWristY = " + rightWristY);
    }
}