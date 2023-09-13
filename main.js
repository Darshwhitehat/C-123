mouthX = 0;
mouthY = 0;

function take_snapshot(){
    save('myMustacheFilter.png')
}

function preload(){
  mouth_mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw(){
  image(video, 0, 0, 300, 300);
  //fill(255, 0, 0);
  //stroke(255, 0, 0);
  image(mouth_mustache, mouthX - 23, mouthY - 3, 50, 40);
}

function modelLoaded(){
  save('myMustacheImage.png');
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    mouthX = results[0].pose.nose.x;
    mouthY = results[0].pose.nose.y;
    console.log("mouth x  = " +results[0].pose.nose.x);
    console.log("mouth y = " +results[0].pose.nose.y);
  }
}