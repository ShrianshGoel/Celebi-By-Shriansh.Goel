var celebi, celebi1;
var fore, for1;
var col;
var hed;
var ar1, arl;
var h=0;
var darkrai, dark, dark1;
var Treasure =0;
var mega, meg , meg1;
var gan, gam;

function preload(){
  celebi1 = loadImage("Celebi_Back_XY.gif");
  hed = loadSound("game-over-30-sound-effect-65063477.mp3");
  col = loadSound("M04 - Pokemon Celebi - The Voice of the Forest [1080p] [Multi-Audio] [RareToonsIndia] (mp3cut.net).mp3");
  for1=loadImage("wp2711114.gif");
  arl = loadImage("razorleaf-logo-large-leaves-only.png");
  dark = loadImage("dd.gif");
  gam = loadImage("c3e1cce883aece3ac10bff6af9b0fc26.gif")
    dark1 = loadImage("ConcreteWelltodoAlligatorsnappingturtle-max-1mb.gif");
  meg = loadImage("unnamed (1).png");
  meg1 = loadImage("pngfind.com-gengar-png-3213248.png");
}
function villian(){
  if (frameCount%70===0){
      var obs = createSprite(50,50,20,20);
    obs.x = Math.round(random(50,350));
    obs.velocityY = 4;
    obs.lifetime = 100;
    
     var rand = Math.round(random(1,2));
    switch(rand) {
        
      case 1: obs.addImage(dark1);
              obs.scale = 0.59;
        obs.setCollider("circle",0,0,100)
          
              break;
      case 2: obs.addImage(dark);
              obs.scale = 0.23;
              obs.setCollider("circle",0,0,200)
        break;
    }
    darkrai.add(obs);
      }
}

function hero(){
  if (frameCount%100===0){
      var obs1 = createSprite(50,50,20,20);
    obs1.x = Math.round(random(50,350));
    obs1.velocityY = 4;
    obs1.lifetime = 100;
    
     var rand = Math.round(random(1,2));
    switch(rand) {
        
      case 1: obs1.addImage(meg);
              obs1.scale = 0.13;
        
          
              break;
      case 2: obs1.addImage(meg1);
              obs1.scale = 0.08;
        break;
    }
    mega.add(obs1);
      }
}

function setup() {
  createCanvas(400, 400);
   gan = createSprite(200,130,20,20)
  gan.addImage(gam);
 
  
  fore = createSprite(200,330,20,20)
  fore.addImage(for1);
  fore.velocityY = 1;
  
  
  darkrai = new Group();
  mega = new Group();
  ar1 = new Group();
  
  celebi = createSprite(200,330,20,20)
  celebi.addImage(celebi1);
  celebi.scale = 0.28;
}

function draw() {
  background(220);
  textSize(20)
  text("Game Over",200,330)
  edges = createEdgeSprites();
  celebi.collide(edges);
  if(h===0){
     
  if (fore.y>330){
      fore.x=200;
    fore.y=230;
      }
  if (mega.isTouching(celebi)){
      Treasure = Treasure+1;
    col.play();
    mega.destroyEach();
      }
  
  if (keyDown("left")){
    celebi.x = celebi.x - 3.84;
  }
   if (keyDown("right")){
    celebi.x = celebi.x + 3.84;
  }
   if (keyDown("up")){
    celebi.y = celebi.y - 3.84;
  }
   if (keyDown("down")){
    celebi.y = celebi.y + 3.84;
  }
  
if (Treasure===10 && keyWentDown("space") || Treasure>10 && keyWentDown("space")){
  var arr = createSprite(0,0,20,20);
  arr.x = celebi.x;
  arr.y = celebi.y;
  arr.velocityY = -3;
  arr.lifetime=100;
  arr.addImage("ddd",arl);
  arr.scale = 0.19;
 ar1.add(arr);
  
}
   
  if (ar1.isTouching(darkrai)){
      darkrai.destroyEach();
     ar1.destroyEach()
       }
  if(Treasure===10 || Treasure>10){
      darkrai.setVelocityYEach(9);
     }
     villian()
  hero();
    
  if (darkrai.isTouching(celebi)){
      h=1
    hed.play() 
      }
     
     }
  if (h===1){
      if(mousePressedOver(gan)){
         h=0
        Treasure=0
         }
      }
  drawSprites();
 
  textSize(22);
    text("Score:"+Treasure,50,50)
}