

function setup(){
    canvas = createCanvas(450,350);
    canvas.position(400,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video,0,0,450,350);
    tint(tint_color);
}

function take_snapshot(){
    save('filter_tint.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value; 
}