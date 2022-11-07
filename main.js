noseX = 0;
noseY = 0;
function setup () {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#FFD700');
   // document.getElementById("square_side").innerHTML = "Width And Heigth will be = "+ difference +"px";
    fill ('#C0C0C0');
    stroke('#C0C0C0');
    square(noseX , noseY, 100);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        //console.log(results);
        noseX = results[0].pose.nose.X;
        noseY = results[0].pose.nose.Y;
        //console.log("nosex = " + noseX +"noseY =" + noseY)

        leftWristX = results[0].pose.leftWrist.X;
        rightWristX = results[0].pose.rightWrist.X;
        difference = floor(leftWristX - rightWristX);
        console.log =floor("leftWristX =" + leftWristX +"rightWristX = " + rightWristX + "differnce = " + difference)
    }
}