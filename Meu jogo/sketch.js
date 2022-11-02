var ninja, ninjaPARADO, ninjaATAQUE,ninjaANDANDO
var robo, roboPARADO, roboANDANDO
var moeda, moedaPNG
var BG
var moita, moitaPNG, moita2, moedaPNG2, moita3, moedaPNG3

function preload(){
    BG = loadImage('BG.png')

    chaobg = loadImage("2.png")


    ninjaPARADO = loadImage("paradoN.png")

    ninjaATAQUE = loadAnimation("ataque/0.png", "ataque/1.png",
    "ataque/2.png", "ataque/3.png", "ataque/4.png", 
    "ataque/5.png", "ataque/6.png", "ataque/7.png",
    "ataque/8.png", "ataque/9.png")

    roboATAQUE = loadAnimation("ataqueR/1.png",
    "ataqueR/2.png", "ataqueR/3.png", "ataqueR/4.png", 
    "ataqueR/5.png", "ataqueR/6.png", "ataqueR/7.png",
    "ataqueR/8.png")


    roboPARADO = loadImage('paradoR.png')

    roboANDANDO = loadAnimation("andandoR/A1.png","andandoR/A2.png",
    "andandoR/A3.png","andandoR/A4.png","andandoR/A5.png",
    "andandoR/A6.png","andandoR/A7.png","andandoR/A8.png",)

    ninjaANDANDO = loadAnimation("andandoN/AN1.png","andandoN/AN2.png",
    "andandoN/AN3.png","andandoN/AN4.png","andandoN/AN5.png",
    "andandoN/AN6.png","andandoN/AN7.png","andandoN/AN8.png",
    "andandoN/AN9.png")

   // moitaPNG = loadImage('Cenário/png/Object/brush (1).png')


} 
    
function setup(){
    createCanvas(890, 600)

    chao = createSprite(0,550,400,20);
    chao.addImage("chao", chaobg);
    chao.scale=1.0

    chao1 = createSprite(128,550,400,20);
    chao1.addImage("chao", chaobg);
    chao1.scale=1.0

    chao2 = createSprite(256,550,400,20);
    chao2.addImage("chao", chaobg);
    chao2.scale=1.0

    chao3 = createSprite(384,550,400,20);
    chao3.addImage("chao", chaobg);
    chao3.scale=1.0

    chao4 = createSprite(512,550,400,20);
    chao4.addImage("chao", chaobg);
    chao4.scale=1.0

    chao5 = createSprite(640,550,400,20);
    chao5.addImage("chao", chaobg);
    chao5.scale=1.0

    chao6 = createSprite(768,550,400,20);
    chao6.addImage("chao", chaobg);
    chao6.scale=1.0

    chao7 = createSprite(896,550,400,20);
    chao7.addImage("chao", chaobg);
    chao7.scale=1.0


    
    ninja = createSprite(400, 430, 10, 10)
    ninja.addImage("paradoN", ninjaPARADO)
    ninja.addAnimation("ataqueN", ninjaATAQUE)
    ninja.addAnimation("andandoN", ninjaANDANDO)
    ninja.scale=0.3

    robo = createSprite(200, 430, 10, 10)
    robo.addImage("paradoR", roboPARADO)
    robo.addAnimation("andandoR", roboANDANDO)
    robo.addAnimation("ataqueR", roboATAQUE)

    robo.scale=0.3
    

}

function draw(){
    background(BG)



    
    if (keyWentDown("right")) {
        robo.velocityX = 10;
        robo.mirrorX(1);
        robo.changeAnimation("andandoR")
      }
      if (keyWentUp("right")) {
        robo.velocityX = 0;
        robo.changeAnimation("paradoR")

      }
     
      if (keyWentDown("left")) {
        robo.mirrorX(-1);
        robo.velocityX = -10;
        robo.changeAnimation("andandoR")
      }
      if (keyWentUp("left")) {
        robo.velocityX = 0;
        robo.changeAnimation("paradoR")
      }

      if (keyWentDown("D")) {
        ninja.velocityX = 10;
        ninja.mirrorX(1);
        ninja.changeAnimation("andandoN")
      }
      if (keyWentUp("D")) {
        ninja.velocityX = 0;
        ninja.changeAnimation("paradoN")

      }
     
      if (keyWentDown("A")) {
        ninja.mirrorX(-1);
        ninja.velocityX = -10;
        ninja.changeAnimation("andandoN")
      }
      if (keyWentUp("A")) {
        ninja.velocityX = 0;
        ninja.changeAnimation("paradoN")
      }
    
      if  (keyWentUp("E")) {
        ninja.changeAnimation("ataqueN")
      }

      if  (keyWentDown("E")) {
        ninja.changeAnimation("paradoN")
      }

      if  (keyWentUp("M")) {
        robo.changeAnimation("ataqueR")
      }

      if  (keyWentDown("M")) {
        robo.changeAnimation("ataqueR")
      }

    drawSprites()
}


