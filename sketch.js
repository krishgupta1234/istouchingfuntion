var movingrect,fixrect;


function setup() {
createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
movingrect.shapeColor = "green";
movingrect.debug = true;

fixrect = createSprite(200,200,60,100);
fixrect.shapeColor = "green";
fixrect.debug = true;





}

function draw() {
  background(0,0,0); 
  
  movingrect.x = mouseX;
movingrect.y = mouseY;

if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2 
  &&fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2
  &&movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2
  &&fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2){
movingrect.shapeColor = "red";
fixrect.shapeColor = "red";
}
else{
movingrect.shapeColor = "green";
fixrect.shapeColor = "green";
}












  drawSprites();
}