moustacheX=0;
moustacheY=0;
hatX=0;
hatY=0;
function preload(){
moustache = loadImage("moustache-removebg-preview.png");
hat = loadImage("hat-removebg-preview.png");
}
function setup(){
   canvas = createCanvas(400, 300);
   canvas.center();

   video = createCapture(VIDEO);
   video.size(400, 300);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        moustacheX = results[0].pose.nose.x - 43;
        moustacheY = results[0].pose.nose.y - 11;
        hatX = results[0].pose.nose.x - 80;
        hatY = results[0].pose.nose.y - 155;
        console.log('nose x value is -' + results[0].pose.nose.x);
        console.log('nose y value is -' + results[0].pose.nose.y);
    }
}
function modelLoaded(){
    console.log("model loaded");
}
function draw(){
    image(video, 0, 0, 400, 300);
    image(moustache, moustacheX, moustacheY, 90, 65);
    image(hat, hatX, hatY, 180, 120);
}
function take_snapshot(){
    save('MoustacheFilter.png');
}