function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 70, 70);
  movingRect=createSprite(200,100, 60, 80);
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"

  gameObject1=createSprite(100,200,50,50)
    gameObject2=createSprite(200, 200, 50, 50)
    gameObject1.shapeColor="green"
    gameObject2.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX
  movingRect.y=mouseY
  //passing the arguments
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="red"
    gameObject2.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
    gameObject2.shapeColor="green"
  }

  drawSprites();
}



//Algorithm creation?
//algorithm??
//method ...solution

//today design an algorithm
//detect collision between two objects
//change the color if they are touching

//two objects

//distance between two rects :  movingRect.x-fixedRect.x
//minimum distance= movingRect.width/2+fixedRect.width/2


//distance between two rects :  movingRect.y-fixedRect.y
//minimum distance= movingRect.height/2+fixedRect.height/2


// Generalise the collision detection part.
//so that we can detect collision between any two objects that we want.
