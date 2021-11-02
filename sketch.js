function preload(){
birdImage = loadImage("bird.png")

}

function setup() {
  createCanvas(displayWidth, displayHeight);

  bird = new Bird()
}

function draw() {
  background("black");  

  if(keyDown (RIGHT_ARROW)){
    bird.body.x += 5
  }

  if(keyDown (LEFT_ARROW)){
    bird.body.x -= 5
  }

  drawSprites();
}

