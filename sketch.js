var gamestate=0


function preload(){
  backgroundImg=loadImage("background.png")
  monster1Img=loadImage("Monster1.png")
  monster2Img=loadImage("Monster2.png")
  monster3Img=loadImage("Monster3.png")
  monster4Img=loadImage("Monster4.png")
  gemImg=loadImage("gem.png")
  mainplayerImg=loadImage("Main player.png")
  friendImg=loadImage('friend.png')
  bulletImg=loadImage('bullet.png')
  fireballImg=loadImage('fireball.png')
  nextbuttonImg=loadImage('new-button.png')
}
function setup() {
  createCanvas(1400,700);
  player=createSprite(180,400,30,30)
  player.addImage(mainplayerImg)
  player.scale=0.4

  friend=createSprite(100,500,30,30)
  friend.addImage(friendImg)
  friend.scale=0.4

  monster1=createSprite(800,300,30,30)
  monster1.addImage(monster1Img)
  monster1.scale=0.6

  monster2=createSprite(800,450,30,30)
  monster2.addImage(monster2Img)
  monster2.scale=0.6

  monster3=createSprite(1100,250,30,30)
  monster3.addImage(monster3Img)
  monster3.scale=0.7

  monster4=createSprite(1200,450,30,30)
  monster4.addImage(monster4Img)
  monster4.scale=0.6

  gem=createSprite(1000,450,30,30)
  gem.addImage(gemImg)
  gem.scale=0.4

  bullet=createSprite(250,400,20,20)
  bullet.addImage(bulletImg)
  bullet.scale=0.1

  fireball=createSprite(750,250,20,20)
  fireball.addImage(fireballImg)
  fireball.scale=0.2

  nextButton1=createSprite(400,400,20,20)
  nextButton1.addImage(nextbuttonImg)
  nextButton1.scale=0.3


}

function draw() {
  background(backgroundImg);

if(keyDown('up')){
player.y=player.y-2
}
if(keyDown('down')){
player.y=player.y+2
}
bullet.y=player.y


if(gamestate===0){
  fill('yellow')
  textSize(30)
  text('KILLTHE MONSTERS AND GET THE GEM TO SAVE YOUR FRIEND',200,40)
  if(mousePressedOver(nextButton1)){
    gamestate=1
  }
}
if(gamestate===1){
  monster2.visible=false
  monster3.visible=false
  nextButton1.visible=false
  friend.visible=false
}


  drawSprites();
}