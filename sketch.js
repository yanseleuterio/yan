var caixa
function setup() {
  createCanvas(400,400);
  caixa=createSprite(31,31,31,31)
}

function draw() 
{
  background("blue");
    if(keyIsDown(UP_ARROW)){
      caixa.y=caixa.y-2
  
    }
    if(keyIsDown(DOWN_ARROW)){
      caixa.y= caixa.y+2
    }
  drawSprites()
}




