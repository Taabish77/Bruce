var bruceImage, bruce;
var thunderImage,thunder;
var RainGroup=new Group;
function preload(){
   thunderImage.loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
   bruceImage,loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png")
}

function setup(){
   bruce=createSprite("200,100,30,30");
   bruce.addAnimation("bruceImage");
   thunder=createSprite("200,250,40,50");
   thunder.addAnimation("thunderImage");
}

function draw(){
   background("black");
   if(raindrops.isTouching("bruce")){
       raindrops.hide();
    }
rain();
    drawSprites();
   }
   function rain() {
      if (frameCount % 60 === 0) {
        var raindrops = createSprite(width+20,height-300,40,10);
        raindrops.x = Math.round(random(100,220));
        raindrops.velocityY = -3;
        raindrops.lifetime = 300;
        RainGroup.add(raindrops);
        raindrops.fill("blue");
      }
      
    }   

