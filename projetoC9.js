
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,50,50);

}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  background("blue")
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

