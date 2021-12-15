var backgroundima, forest;
var rana_caminando,rana_caminandoizq, rana_salto,rana_saltoizq, rana, rana_alto,rana_altoizq;
var invisibleground;
var gravity =1;
var gameStates = "serve";
var Orientation;


function preload(){
backgroundima = loadImage("Fondo_Jungla.png")

rana_caminando = loadAnimation("Rana_1.png","Rana_2.png","Rana_3.png","Rana_1.png")
rana_alto = loadAnimation("Rana_1.png")
rana_salto = loadAnimation("Rana_2.png","RanaSalto1.png","RanaSalto2.png","Rana_3.png")


rana_caminandoizq = loadAnimation("Rana_1izq.png","Rana_2izq.png","Rana_3izq.png","Rana_1izq.png")
rana_altoizq = loadAnimation("Rana_1izq.png")
rana_saltoizq = loadAnimation("Rana_2izq.png","RanaSalto1izq.png","RanaSalto2izq.png","Rana_3izq.png")
}

function setup() {
createCanvas(600,400);
background("black")
 
forest = createSprite(300,200)
 forest.scale = 1.2
 forest.velocityX = -3
 forest.addImage("forest",backgroundima);
 
 rana = createSprite(100,320);
  rana.addAnimation("alto",rana_alto);
 rana.addAnimation("caminar",rana_caminando);
 rana.addAnimation("salto",rana_salto);
 
 rana.addAnimation("altoizq",rana_altoizq);
 rana.addAnimation("caminarizq",rana_caminandoizq),
 rana.addAnimation("saltoizq",rana_saltoizq);

 rana.scale = .2

 invisibleground = createSprite(300,399,600,80);
 invisibleground.visible = false;
 rana.debug = true;
 rana.setCollider("Circle",0,0,150)
 

}

function draw() {
 drawSprites();
 console.log(rana.y);
 rana.collide(invisibleground);   
    if (forest.x < 0){
forest.x = forest.width/2
// bosque infinito
}

rana.velocityY = rana.velocityY + 1
if (gameStates == "serve"){
    if(rana.x<0 || rana.x>600){
        rana.x = 100;
    }
    // para que la rana no se salga del canva durante el tutorial
    movimiento();
   



    forest.velocityX =0;
    var globode_texto = createSprite(480,300,250,600)
    globode_texto.shapeColor ="lightblue" 
    textSize(20);
    fill("Black");
    text("No te quedes atras",375,30);
    textSize(16);
    text("Usa las flechas para moverte",375,70);
    textSize(15);
    text("Usa las ramas para brincar en ellas",370,100)
    text("Evita las serpientes y Aguilas", 370,120)
    text("Presiona Enter para Empezar",375,180)
    
    


}







}
function movimiento(){
    if (keyDown("right")){
        Orientation = 1;
        rana.changeAnimation("caminar",rana_caminando);
        rana.velocityX = 5

    }
    else if (keyDown("left")){
        Orientation = -1
        rana.changeAnimation("caminarizq",rana_caminandoizq);
        rana.velocityX = -5

    }
    else if (keyDown("up")){
        if(Orientation =-1){
        rana.changeAnimation("saltoizq",rana_saltoizq);
        }
        if(Orientation =1){
            rana.changeAnimation("salto",rana_salto);
        }
       if(rana.y>310){
       rana.velocityY = rana.velocityY -5
       
    }
    else if (rana.y == 330){
        if(Orientation == 1){
            rana.changeAnimation("alto",rana_alto);
            }
            if (Orientation == -1){
            rana.changeAnimation("altoizq",rana_altoizq);
            }
        }
    }
    else if(gameStates == "serve"){
    rana.velocityX = 0;     
    }
}